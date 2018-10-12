'use strict';

const
  clockService = require('./clockservice'),
  dateformat = require('dateformat'),
  vscode = require('vscode');

const DEFAULT_DATE_FORMAT = 'hh:MM TT';

class StatusBarItem {
  constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    this._statusBarItem.command = 'clock.insertDateTime';
    this._statusBarItem.tooltip = 'Click to insert into selection';
    this._statusBarItem.show();

    this._refresh = vscode.workspace.getConfiguration('clock').refreshInterval * 1000 || 1000;
    this._interval = setInterval(() => this.refreshUI(), this._refresh);

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
