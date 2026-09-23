/*---------------------------------------------------------------------------------------------
 *  Account Panel — floating dropdown showing the local identity and connected AI providers.
 *--------------------------------------------------------------------------------------------*/

import { Component, DOM, $ } from '../components/base.js';
import { IAccountService, IAuthSession } from './accountService.js';
import { Emitter, Event } from '../../../../../base/common/event.js';
import { localize } from '../../../../../nls.js';

/** Mirrors the Rust `ProviderStatus` struct returned by the `providers_status` command. */
interface IProviderStatus {
	id: string;
	label: string;
	baseUrl: string;
	configured: boolean;
	source: string | null;
	keyless: boolean;
	envVar: string | null;
}

export class AccountPanel extends Component {
	private _contentEl: HTMLElement;
	private _visible = false;

	// The only outbound signal this panel still has: "open where credentials
	// are managed". onDidRequestLogin/onDidRequestLogout were removed —
	// SideX has no login/logout flow to request, and grepping the whole
	// workbench found no subscriber for either (sidexChatView.ts only ever
	// listened to this one).
	private readonly _onDidRequestManagePlan = this._register(new Emitter<void>());
	readonly onDidRequestManagePlan: Event<void> = this._onDidRequestManagePlan.event;

	constructor(private readonly _accountService: IAccountService) {
		super('div', 'sc-account-panel');
		this.element.style.display = 'none';
		this._contentEl = this.append('div', 'sc-account-panel-content');
		this._injectStyles();
		this._render();

		this._disposables.add(this._accountService.onDidChangeSession(() => this._render()));
	}

	toggle(): void {
		this._visible = !this._visible;
		this.element.style.display = this._visible ? '' : 'none';
		if (this._visible) {
			this._render();
		}
	}

	close(): void {
		this._visible = false;
		this.element.style.display = 'none';
	}

	isVisible(): boolean {
		return this._visible;
	}

	private _render(): void {
		DOM.clearNode(this._contentEl);
		const session = this._accountService.getSession();
		if (!session) {
			// AccountService always resolves to at least the local fallback
			// profile; this is only a defensive guard against the null in its type.
			return;
		}
		this._renderAccount(session);
	}

	private _renderAccount(session: IAuthSession): void {
		const container = DOM.append(this._contentEl, $('div.sc-account-content'));

		// User header
		const header = DOM.append(container, $('div.sc-account-header'));
		const avatar = DOM.append(header, $('div.sc-account-avatar'));
		if (session.user.picture) {
			const img = DOM.append(avatar, $('img')) as HTMLImageElement;
			img.src = session.user.picture;
			img.alt = session.user.name;
		} else {
			avatar.textContent = session.user.name.charAt(0).toUpperCase();
		}

		const info = DOM.append(header, $('div.sc-account-info'));
		const name = DOM.append(info, $('div.sc-account-name'));
		name.textContent = session.user.name;
		if (session.user.email) {
			const email = DOM.append(info, $('div.sc-account-email'));
			email.textContent = session.user.email;
		}

		// Connected providers
		void this._renderProviders(container);

		// Action button
		const actions = DOM.append(container, $('div.sc-account-actions'));
		const configureBtn = DOM.append(actions, $('button.sc-account-btn.sc-account-btn-secondary'));
		configureBtn.textContent = localize('sidex.chat.configureProviders', 'Configure Providers');
		this.on(configureBtn, 'click', () => this._onDidRequestManagePlan.fire());
	}

	private async _renderProviders(container: HTMLElement): Promise<void> {
		const invoke = AccountPanel._getTauriInvoke();
		if (!invoke) {
			return;
		}

		let providers: IProviderStatus[];
		try {
			providers = (await invoke('providers_status')) as IProviderStatus[];
		} catch {
			return;
		}
		if (!Array.isArray(providers)) {
			return;
		}

		const connected = providers.filter(p => p.configured);

		const section = DOM.append(container, $('div.sc-account-providers'));
		const heading = DOM.append(section, $('div.sc-account-providers-heading'));
		// Don't call it "Connected providers" when there aren't any — that
		// reads like a broken state instead of a starting one.
		heading.textContent =
			connected.length > 0
				? localize('sidex.chat.connectedProviders', 'Connected providers')
				: localize('sidex.chat.providers', 'Providers');

		if (connected.length === 0) {
			const empty = DOM.append(section, $('div.sc-account-providers-empty'));
			empty.textContent = localize(
				'sidex.chat.noProviders',
				'No providers connected yet. Add an API key below to start chatting.'
			);
			return;
		}

		const list = DOM.append(section, $('div.sc-account-providers-list'));
		for (const provider of connected) {
			const row = DOM.append(list, $('div.sc-account-provider-row'));
			DOM.append(row, $('span.sc-account-provider-dot'));
			const label = DOM.append(row, $('span.sc-account-provider-label'));
			label.textContent = provider.label;
			const source = DOM.append(row, $('span.sc-account-provider-source'));
			source.textContent = AccountPanel._sourceLabel(provider.source);
		}
	}

	/** Human label for the `source` field on `ProviderStatus` (settings|env|cli|local). */
	private static _sourceLabel(source: string | null): string {
		switch (source) {
			case 'settings':
				return localize('sidex.chat.apiKey', 'API key');
			case 'env':
				return localize('sidex.chat.environment', 'Environment');
			case 'cli':
				return localize('sidex.chat.cliLogin', 'CLI login');
			case 'local':
				return localize('sidex.chat.localServer', 'Local server');
			default:
				return '';
		}
	}

	private static _getTauriInvoke(): ((cmd: string, args?: Record<string, unknown>) => Promise<unknown>) | null {
		const g = globalThis as unknown as {
			__TAURI_INVOKE__?: (cmd: string, args?: Record<string, unknown>) => Promise<unknown>;
			__TAURI_INTERNALS__?: { invoke: (cmd: string, args?: Record<string, unknown>) => Promise<unknown> };
		};
		return g.__TAURI_INVOKE__ ?? g.__TAURI_INTERNALS__?.invoke ?? null;
	}

	private _injectStyles(): void {
		const id = 'sc-account-panel-styles';
		if (document.getElementById(id)) {
			return;
		}
		const style = document.createElement('style');
		style.id = id;
		style.textContent = `
.sc-account-panel {
	position: absolute;
	top: 36px;
	right: 8px;
	z-index: 10000;
	width: 280px;
	background: var(--vscode-menu-background, var(--vscode-editorWidget-background, #21252b));
	color: var(--vscode-foreground, #abb2bf);
	border: 1px solid var(--vscode-menu-border, var(--vscode-widget-border, #3a3f4b));
	border-radius: 8px;
	box-shadow: 0 8px 32px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.4));
	padding: 0;
	overflow: hidden;
}
.sc-account-panel-content {
	padding: 16px;
}
.sc-account-header {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 14px;
}
.sc-account-avatar {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: var(--vscode-list-hoverBackground, #2c313a);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	font-weight: 600;
	color: var(--vscode-foreground, #abb2bf);
	overflow: hidden;
	flex-shrink: 0;
}
.sc-account-avatar img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.sc-account-info {
	flex: 1;
	min-width: 0;
}
.sc-account-name {
	font-size: 12px;
	font-weight: 500;
	color: var(--vscode-foreground, #abb2bf);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.sc-account-email {
	font-size: 11px;
	color: var(--vscode-descriptionForeground, #9da5b4);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.sc-account-providers {
	margin-bottom: 14px;
	padding: 12px;
	background: var(--vscode-editor-background, #282c34);
	border-radius: 6px;
}
.sc-account-providers-heading {
	font-size: 10px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: var(--vscode-descriptionForeground, #9da5b4);
	margin-bottom: 8px;
}
.sc-account-providers-empty {
	font-size: 11.5px;
	color: var(--vscode-descriptionForeground, #9da5b4);
}
.sc-account-providers-list {
	display: flex;
	flex-direction: column;
	gap: 6px;
}
.sc-account-provider-row {
	display: flex;
	align-items: center;
	gap: 8px;
}
.sc-account-provider-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--vscode-testing-iconPassed, #98c379);
	flex-shrink: 0;
}
.sc-account-provider-label {
	flex: 1;
	min-width: 0;
	font-size: 11.5px;
	color: var(--vscode-foreground, #abb2bf);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.sc-account-provider-source {
	font-size: 10.5px;
	color: var(--vscode-descriptionForeground, #9da5b4);
	flex-shrink: 0;
}
.sc-account-actions {
	display: flex;
	flex-direction: column;
	gap: 6px;
}
.sc-account-btn {
	display: block;
	width: 100%;
	padding: 7px 12px;
	border: none;
	border-radius: 5px;
	font-size: 11.5px;
	font-weight: 500;
	cursor: pointer;
	text-align: center;
	transition: background 0.15s ease;
}
.sc-account-btn-secondary {
	background: var(--vscode-button-secondaryBackground, #353b45);
	color: var(--vscode-button-secondaryForeground, #abb2bf);
}
.sc-account-btn-secondary:hover {
	background: var(--vscode-button-secondaryHoverBackground, #3e4451);
}
`;
		document.head.appendChild(style);
	}
}
