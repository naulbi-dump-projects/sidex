/*---------------------------------------------------------------------------------------------
 *  Tools & MCPs section for SideX Settings panel.
 *  Context, auto-run, applying changes, inline editing, and voice settings.
 *--------------------------------------------------------------------------------------------*/

import type { SettingsSection } from '../sidexSettingsPanel.js';
import { createCustomDropdown } from '../sidexSettingsStyles.js';
import { localize } from '../../../../../../nls.js';

type TauriInvoke = ((cmd: string, args?: Record<string, unknown>) => Promise<unknown>) | null;

export class ToolsSection implements SettingsSection {
	private _container: HTMLElement | null = null;
	private _invoke: TauriInvoke;

	constructor(invoke: TauriInvoke) {
		this._invoke = invoke;
	}

	async render(container: HTMLElement): Promise<void> {
		this._container = container;

		const title = document.createElement('div');
		title.className = 'sidex-settings-section-title';
		title.textContent = localize('sidexSettingsTools', 'Tools & MCPs');
		container.appendChild(title);

		this._renderContext(container);
		this._renderAutoRun(container);
	}

	private _renderContext(container: HTMLElement): void {
		const sectionTitle = this._sectionTitle(localize('sidexSettingsContext', 'Context'));
		container.appendChild(sectionTitle);

		const card = document.createElement('div');
		card.className = 'sidex-settings-card';

		const webSearchRow = this._createRow(card, localize('sidexSettingsWebSearchTool', 'Web Search Tool'), '');
		this._addToggle(webSearchRow, true, 'tools.webSearch');

		const autoWebRow = this._createRow(
			card,
			localize('sidexSettingsAutoAcceptWebSearch', 'Auto-Accept Web Search'),
			localize('sidexSettingsAutoAcceptWebSearchDescription', 'Enabled by Run Everything Auto-Run Mode')
		);
		this._addToggle(autoWebRow, true, 'tools.autoAcceptWebSearch');

		const webFetchRow = this._createRow(card, localize('sidexSettingsWebFetchTool', 'Web Fetch Tool'), '');
		this._addToggle(webFetchRow, true, 'tools.webFetch');

		container.appendChild(card);
	}

	private _renderAutoRun(container: HTMLElement): void {
		const sectionTitle = this._sectionTitle(localize('sidexSettingsAutoRun', 'Auto-Run'));
		container.appendChild(sectionTitle);

		const card = document.createElement('div');
		card.className = 'sidex-settings-card';

		const modeRow = this._createRow(card, localize('sidexSettingsAutoRunMode', 'Auto-Run Mode'), '');
		this._addSelect(
			modeRow,
			[
				{
					value: 'Run Everything (Unsandboxed)',
					label: localize('sidexSettingsAutoRunEverything', 'Run Everything (Unsandboxed)')
				},
				{ value: 'Ask for approval', label: localize('sidexSettingsAutoRunAsk', 'Ask for approval') },
				{ value: 'Sandboxed', label: localize('sidexSettingsAutoRunSandboxed', 'Sandboxed') }
			],
			'Run Everything (Unsandboxed)',
			'tools.autoRunMode'
		);

		container.appendChild(card);
	}

	private _sectionTitle(text: string): HTMLElement {
		const wrap = document.createElement('div');
		wrap.className = 'sidex-settings-subsection-header';
		const el = document.createElement('div');
		el.className = 'sidex-settings-section-title';
		el.textContent = text;
		wrap.appendChild(el);
		return wrap;
	}

	private _createRow(parent: HTMLElement, label: string, description?: string): HTMLElement {
		const row = document.createElement('div');
		row.className = 'sidex-settings-row';

		const left = document.createElement('div');
		const lbl = document.createElement('div');
		lbl.className = 'sidex-settings-row-label';
		lbl.textContent = label;
		left.appendChild(lbl);

		if (description) {
			const desc = document.createElement('div');
			desc.className = 'sidex-settings-row-description';
			desc.textContent = description;
			left.appendChild(desc);
		}
		row.appendChild(left);

		const action = document.createElement('div');
		action.className = 'sidex-settings-row-action';
		row.appendChild(action);

		parent.appendChild(row);
		return row;
	}

	private _addToggle(row: HTMLElement, initialState: boolean, settingKey: string): HTMLElement {
		const toggle = document.createElement('div');
		toggle.className = 'sidex-settings-toggle' + (initialState ? ' on' : '');
		toggle.addEventListener('click', () => {
			toggle.classList.toggle('on');
			const value = toggle.classList.contains('on');
			if (this._invoke) {
				this._invoke('settings_update', { key: settingKey, value, scope: 'user' }).catch(() => {});
			}
		});
		row.querySelector('.sidex-settings-row-action')!.appendChild(toggle);
		return toggle;
	}

	private _addSelect(
		row: HTMLElement,
		options: Array<string | { value: string; label: string }>,
		defaultValue: string,
		settingKey: string
	): HTMLElement {
		const dropdown = createCustomDropdown(options, defaultValue, newValue => {
			if (this._invoke) {
				this._invoke('settings_update', { key: settingKey, value: newValue, scope: 'user' }).catch(() => {});
			}
		});
		row.querySelector('.sidex-settings-row-action')!.appendChild(dropdown);
		return dropdown;
	}

	dispose(): void {
		this._container = null;
	}
}
