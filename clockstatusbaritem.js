'use strict';

const
  clockService = require('./clockservice'),
  dateformat = require('dateformat'),
  vscode = require('vscode');

const DEFAULT_DATE_FORMAT = 'hh:MM TT';
const DEFAULT_CLOCK_ALIGNMENT = vscode.StatusBarAlignment.Right;

class StatusBarItem {
  constructor() {
    this._statusBarItem = this._createStatusBar();
    this._interval = setInterval(() => this.refreshUI(), 1000);

    vscode.workspace.onDidChangeConfiguration(this._onDidChangeConfiguration.bind(this));

    this.refreshUI();
  }

  get _clockAlignment() {
    const confAlignment = vscode.workspace.getConfiguration('clock').alignment || '';

    switch (confAlignment.toLowerCase()) {
      case 'left':
        return vscode.StatusBarAlignment.Left;
      case 'right':
        return vscode.StatusBarAlignment.Right;
      default:
        return DEFAULT_CLOCK_ALIGNMENT;
    }
  }

  get _clockPriority() {
    switch (this._clockAlignment) {
      case vscode.StatusBarAlignment.Left:
        return 100;
      case vscode.StatusBarAlignment.Right:
        return -100;
    }
  }

  _createStatusBar() {
    const _statusBarItem = vscode.window.createStatusBarItem(this._clockAlignment, this._clockPriority);
    _statusBarItem.command = 'clock.insertDateTime';
    _statusBarItem.tooltip = 'Click to insert into selection';
    _statusBarItem.show();

    return _statusBarItem;
  }

  _onDidChangeConfiguration(configurationChangeEvent) {
    if (!configurationChangeEvent.affectsConfiguration('clock')) {
      // This configuration change was unrelated to this extension.
      return;
    }

    this._statusBarItem.dispose();
    this._statusBarItem = this._createStatusBar();
  }

  dispose() {
    this._statusBarItem.dispose();
    clearInterval(this._interval);
  }

  refreshUI() {
    this._statusBarItem.text = clockService();
  }
}

module.exports = StatusBarItem;
