# Clock for Visual Studio Code
Shows clock in status bar in Visual Studio Code, even in full screen mode.

![Demo showing clock in status bar](https://raw.githubusercontent.com/compulim/vscode-clock/master/demo.png)

## Usage
When the extension is installed, a clock will be displayed on the lower right hand corner.

The date time format can be changed via preferences
* File > Preferences > User Settings
* Adds the following line
  *	```"clock.dateFormat": "hh:MM TT"```
  * Date format can be found at https://github.com/felixge/node-dateformat

To insert the clock into the selection, you can either click on the clock on status bar, or use the Command Palette.
* Bring up Command Palette (`F1`, or `Ctrl+Shift+P` on Windows and Linux, or `Shift+CMD+P` on OSX)
* Type or select "Clock: Insert date and time"

The date time format that is used when inserting into selection can be changed via preferences
* File > Preferences > User Settings
* Adds the following line
  *	```"clock.insertFormat": "dd/mm/yyyy hh:MM TT"```
  * Date format can be found at https://github.com/felixge/node-dateformat

You can also modify keyboard shortcut with JSON below.
```
{
  "key": "ctrl+shift+f5",
  "command": "clock.insertDateTime",
  "when": "editorTextFocus"
}
```

## Change log
* 0.0.1 (2016-02-24): First public release
* 0.1.0 (2017-08-01): Separate insert format than that shown in the clock

## Contributions
Love this extension? [Star](https://github.com/compulim/vscode-clock/stargazers) us!

Want to make this extension even more awesome? [Send us your wish](https://github.com/compulim/vscode-clock/issues/new/).

Hate how it is working? [File an issue](https://github.com/compulim/vscode-clock/issues/new/) to us.
