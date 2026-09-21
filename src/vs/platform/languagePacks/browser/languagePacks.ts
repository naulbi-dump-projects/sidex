/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from '../../../base/common/uri.js';
import { ILanguagePackItem, ILanguagePackService } from '../common/languagePacks.js';
import { IExtensionGalleryService } from '../../extensionManagement/common/extensionManagement.js';
import { CancellationToken } from '../../../base/common/cancellation.js';
import { IExtensionService } from '../../../workbench/services/extensions/common/extensions.js';

const LANGUAGE_PACK_EXTENSION_PREFIX = 'vscode-language-pack-';
const LANGUAGE_PACK_LOCALE_ALIASES: Readonly<Record<string, string>> = {
	'zh-hans': 'zh-cn',
	'zh-hant': 'zh-tw'
};

export class WebLanguagePacksService implements ILanguagePackService {
	declare readonly _serviceBrand: undefined;

	constructor(
		@IExtensionGalleryService private readonly galleryService: IExtensionGalleryService,
		@IExtensionService private readonly extensionService: IExtensionService
	) {}

	async getBuiltInExtensionTranslationsUri(_id: string, _language: string): Promise<URI | undefined> {
		return undefined;
	}

	async getAvailableLanguages(): Promise<ILanguagePackItem[]> {
		if (!this.galleryService.isEnabled()) {
			return [];
		}
		try {
			const result = await this.galleryService.query(
				{ text: '@category:"language packs"', pageSize: 50 },
				CancellationToken.None
			);
			return result.firstPage
				.filter(ext => ext.name.startsWith('vscode-language-pack'))
				.map(ext => {
					const locale =
						ext.tags.find(t => t.startsWith('lp-'))?.slice(3) ?? ext.name.replace('vscode-language-pack-', '');
					return {
						id: locale,
						label: ext.displayName ?? ext.name,
						description: ext.description,
						extensionId: ext.identifier.id,
						galleryExtension: ext
					};
				});
		} catch {
			return [];
		}
	}

	async getInstalledLanguages(): Promise<ILanguagePackItem[]> {
		const items: ILanguagePackItem[] = [];
		const seenLocales = new Set<string>();
		const extensionId = localStorage.getItem('vscode.nls.languagePackExtensionId');
		const locale = localStorage.getItem('vscode.nls.locale');

		if (extensionId && locale) {
			items.push({
				id: locale,
				label: this.getLanguageLabel(locale),
				extensionId
			});
			seenLocales.add(locale.toLowerCase());
		}

		for (const extension of this.extensionService.extensions) {
			if (!extension.name.startsWith(LANGUAGE_PACK_EXTENSION_PREFIX)) {
				continue;
			}

			const extensionLocale = this.getLocaleFromExtensionName(extension.name);
			if (!extensionLocale || seenLocales.has(extensionLocale.toLowerCase())) {
				continue;
			}

			items.push({
				id: extensionLocale,
				label: this.getLanguageLabel(extensionLocale),
				extensionId: extension.identifier.value
			});
			seenLocales.add(extensionLocale.toLowerCase());
		}

		return items;
	}

	private getLanguageLabel(locale: string): string {
		const labels: Record<string, string> = {
			'zh-cn': '中文(简体)',
			'zh-tw': '中文(繁體)',
			ja: '日本語',
			ko: '한국어',
			de: 'Deutsch',
			fr: 'Français',
			es: 'Español',
			it: 'Italiano',
			'pt-br': 'Português (Brasil)',
			ru: 'Русский',
			tr: 'Türkçe',
			pl: 'Polski',
			cs: 'Čeština',
			hu: 'Magyar'
		};
		return labels[locale.toLowerCase()] ?? locale;
	}

	private getLocaleFromExtensionName(name: string): string | undefined {
		const locale = name.slice(LANGUAGE_PACK_EXTENSION_PREFIX.length);
		if (!locale) {
			return undefined;
		}
		return LANGUAGE_PACK_LOCALE_ALIASES[locale.toLowerCase()] ?? locale;
	}
}
