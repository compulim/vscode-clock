'use strict';

const
    dateformat = require('dateformat'),
    vscode = require('vscode');

const DEFAULT_DATE_FORMAT = 'hh:MM TT';
const DEFAULT_INSERT_FORMAT = 'dd/mm/yyyy hh:MM TT';

module.exports = {
    insert: function() {
        return dateformat(Date.now(), vscode.workspace.getConfiguration('clock').insertFormat || DEFAULT_INSERT_FORMAT);
    },

    show: function() {
        return dateformat(Date.now(), vscode.workspace.getConfiguration('clock').dateFormat || DEFAULT_DATE_FORMAT);
    }
};