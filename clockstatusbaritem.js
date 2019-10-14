'use strict';

const
  clockService = require('./clockservice'),
  dateformat = require('dateformat'),
  vscode = require('vscode');

const DEFAULT_DATE_FORMAT = 'hh:MM TT';
const DEFAULT_CLOCK_ALIGNMENT = vscode.StatusBarAlignment.Right;

function clockAlignment() {
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

function clockPriority() {
  switch (clockAlignment()) {
    case vscode.StatusBarAlignment.Left:
      return 100;
    case vscode.StatusBarAlignment.Right:
      return -100;
  }
}

class StatusBarItem {
  constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(clockAlignment(), clockPriority());
    this._statusBarItem.command = 'clock.insertDateTime';
    this._statusBarItem.tooltip = 'Click to insert into selection';
    this._statusBarItem.show();

    this._interval = setInterval(() => this.refreshUI(), 1000);

    this.refreshUI();
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
