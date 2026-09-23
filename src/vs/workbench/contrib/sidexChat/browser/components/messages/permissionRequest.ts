/*---------------------------------------------------------------------------------------------
 *  Permission Request — Cursor-style with full path + permission mode dropdown
 *--------------------------------------------------------------------------------------------*/

import { Component, DOM, $ } from '../base.js';
import { Emitter, Event } from '../../../../../../base/common/event.js';
import { renderMarkdown } from '../markdownRenderer.js';
import { localize } from '../../../../../../nls.js';

export interface PermissionRequestData {
	toolCallId: string;
	toolName: string;
	args?: Record<string, unknown>;
}

export interface PermissionResult {
	toolCallId: string;
	approved: boolean;
	alwaysAllow: boolean;
}

const TOOL_VERBS: Record<string, string> = {
	shell: localize('sidex.chat.runCommand', 'Run command'),
	run_background: localize('sidex.chat.runBackgroundProcess', 'Run background process'),
	kill_shell: localize('sidex.chat.killProcess', 'Kill process'),
	write_file: localize('sidex.chat.writeTo', 'Write to'),
	edit_file: localize('sidex.chat.edit', 'Edit'),
	multi_edit: localize('sidex.chat.edit', 'Edit'),
	patch_file: localize('sidex.chat.patch', 'Patch'),
	regex_replace: localize('sidex.chat.replaceIn', 'Replace in'),
	notebook_edit: localize('sidex.chat.editNotebook', 'Edit notebook'),
	git_commit: localize('sidex.chat.commit', 'Commit'),
	repl: localize('sidex.chat.runRepl', 'Run REPL'),
	powershell: localize('sidex.chat.runPowerShell', 'Run PowerShell'),
	delete_file: localize('sidex.chat.deleteFile', 'Delete')
};

export class PermissionRequestDialog extends Component {
	private readonly _onRespond = this._register(new Emitter<PermissionResult>());
	readonly onRespond: Event<PermissionResult> = this._onRespond.event;

	constructor(data: PermissionRequestData) {
		super('div', 'sc-permission-dialog');
		this.element.style.cssText =
			'border: 1px solid var(--composer-pending-action-color, var(--vscode-focusBorder)); border-radius: 8px; padding: 12px; margin: 8px 0; background: var(--vscode-editor-background); display: flex; flex-direction: column; gap: 8px;';

		// Plan approval is a dedicated flow (Cursor/Claude-Code style):
		// show the plan itself with Approve / Keep planning.
		if (data.toolName === 'exit_plan_mode') {
			this._buildPlanApproval(data);
			return;
		}

		// Top row: permission mode dropdown
		const topRow = this.append('div', 'ui-tool-call-card__header');
		topRow.style.cssText =
			'display: flex; align-items: center; padding: 6px 10px; border-bottom: 1px solid var(--vscode-widget-border, rgba(255,255,255,0.06)); margin: -12px -12px 8px -12px; border-radius: 8px 8px 0 0; background: var(--vscode-sideBar-background);';

		const icon = DOM.append(topRow, DOM.$('span.ui-shell-tool-call__icon-swap'));
		const terminalIcon = DOM.append(icon, DOM.$('span.codicon.codicon-terminal.ui-shell-tool-call__icon-default'));
		terminalIcon.setAttribute('aria-hidden', 'true');
		icon.style.cssText =
			'display: flex; align-items: center; color: var(--vscode-descriptionForeground); opacity: 0.8; margin-right: 8px;';

		const title = DOM.append(topRow, DOM.$('span.ui-shell-tool-call__description'));
		title.style.cssText =
			'flex: 1; font-size: 12px; color: var(--vscode-foreground); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500;';
		title.textContent = this._getButtonLabel(data.toolName);

		// Main content: tool description with full path
		const content = this.append('div', 'ui-tool-call-card__body');
		content.style.cssText =
			'padding: 8px 10px; font-family: var(--vscode-editor-font-family, monospace); font-size: 11px; color: var(--vscode-descriptionForeground); overflow-y: auto; white-space: pre-wrap; word-break: break-all; background: var(--vscode-textCodeBlock-background); border-radius: 4px;';
		content.textContent = this._buildDescription(data.toolName, data.args);

		// Bottom row: buttons
		const buttons = this.append('div', 'sc-permission-buttons');

		const denyBtn = DOM.append(buttons, $('button.sc-permission-btn.sc-permission-deny'));
		denyBtn.style.cssText =
			'padding: 6px 12px; border-radius: 4px; border: 1px solid var(--vscode-widget-border); background: transparent; color: var(--vscode-foreground); cursor: pointer; font-size: 12px;';
		denyBtn.textContent = localize('sidex.chat.cancel', 'Cancel');
		this.on(denyBtn, 'click', () => {
			this._onRespond.fire({ toolCallId: data.toolCallId, approved: false, alwaysAllow: false });
			this._dismiss();
		});

		const allowBtn = DOM.append(buttons, $('button.sc-permission-btn.sc-permission-allow'));
		allowBtn.style.cssText =
			'padding: 6px 12px; border-radius: 4px; border: none; background: var(--vscode-button-background); color: var(--vscode-button-foreground); cursor: pointer; font-size: 12px; font-weight: 500;';
		allowBtn.textContent = this._getButtonLabel(data.toolName);
		this.on(allowBtn, 'click', () => {
			this._onRespond.fire({ toolCallId: data.toolCallId, approved: true, alwaysAllow: false });
			this._dismiss();
		});

		requestAnimationFrame(() => allowBtn.focus());
	}

	/** Plan approval dialog: render the proposed plan and ask for explicit sign-off. */
	private _buildPlanApproval(data: PermissionRequestData): void {
		this.element.classList.add('sc-plan-approval');

		const content = this.append('div', 'sc-permission-content');
		const title = DOM.append(content, $('div.sc-permission-desc'));
		title.textContent = localize('sidex.chat.planReady', 'Plan ready for review');
		title.style.fontWeight = '600';

		const plan = typeof data.args?.['plan'] === 'string' ? (data.args['plan'] as string) : '';
		if (plan) {
			const planEl = DOM.append(content, $('div.sc-plan-approval-body'));
			planEl.style.cssText = 'max-height:320px;overflow-y:auto;margin-top:6px;font-size:12px;';
			planEl.innerHTML = renderMarkdown(plan);
		} else {
			const note = DOM.append(content, $('div.sc-plan-approval-body'));
			note.style.cssText = 'margin-top:6px;font-size:12px;opacity:0.8;';
			note.textContent = localize(
				'sidex.chat.planImplementationNotice',
				'The agent wants to start implementing (see its plan in the conversation above).'
			);
		}

		const buttons = this.append('div', 'sc-permission-buttons');

		const denyBtn = DOM.append(buttons, $('button.sc-permission-btn.sc-permission-deny'));
		denyBtn.textContent = localize('sidex.chat.keepPlanning', 'Keep planning');
		this.on(denyBtn, 'click', () => {
			this._onRespond.fire({ toolCallId: data.toolCallId, approved: false, alwaysAllow: false });
			this._dismiss();
		});

		const allowBtn = DOM.append(buttons, $('button.sc-permission-btn.sc-permission-allow'));
		allowBtn.textContent = localize('sidex.chat.approvePlan', 'Approve plan');
		this.on(allowBtn, 'click', () => {
			this._onRespond.fire({ toolCallId: data.toolCallId, approved: true, alwaysAllow: false });
			this._dismiss();
		});

		requestAnimationFrame(() => allowBtn.focus());
	}

	private _buildDescription(toolName: string, args?: Record<string, unknown>): string {
		const verb = TOOL_VERBS[toolName] || toolName;
		if (!args) {
			return verb;
		}

		if (toolName === 'shell' || toolName === 'run_background' || toolName === 'repl' || toolName === 'powershell') {
			const cmd = (args['command'] || args['cmd'] || '') as string;
			return cmd || verb;
		}

		const path = (args['path'] || args['file_path'] || args['file'] || '') as string;
		if (path) {
			return path;
		}

		if (toolName === 'git_commit') {
			const msg = (args['message'] || '') as string;
			return `${verb}: ${msg}`;
		}

		return verb;
	}

	private _getButtonLabel(toolName: string): string {
		if (toolName === 'shell' || toolName === 'run_background' || toolName === 'repl' || toolName === 'powershell') {
			return localize('sidex.chat.runCommand', 'Run command');
		}
		return localize('sidex.chat.allow', 'Allow');
	}

	private _dismiss(): void {
		this.element.classList.add('sc-permission-exit');
		setTimeout(() => {
			this.element.remove();
			this.dispose();
		}, 150);
	}
}
