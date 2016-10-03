# ng2-ace

[![npm version](https://badge.fury.io/js/ng2-ace-editor.svg)](https://www.npmjs.com/package/ng2-ace-editor) 
Ace editor integration with typescript for angular 2.

# Install in your project
`npm install ng2-ace-editor --save`

# Sample Usage

> Minimal

```js
import { Component } from 'angular2/core';
import { AceEditorDirective } from 'ng2-ace-editor';

@Component({
  directives: [AceEditorDirective],
  template: `
  <div ace-editor
       [text]="text"></div>
  `
})
export class MyComponent {
    text:string = "";
}
```

> Complete

```js
import { Component } from 'angular2/core';
import { AceEditorDirective } from 'ng2-ace-editor';

import 'brace/theme/clouds';
import 'brace/mode/sql';

@Component({
  directives: [AceEditorDirective],
  template: `
  <div ace-editor
       [setup]="function(editor,ace){...}"
       [text]="text"
       [mode]="'sql'"
       [theme]="'clouds'"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="true" //change content when [text] change
       (textChanged)="onChange($event)"
       style="min-height: 200px; width:100%; overflow: auto;"></div>
  `
})
export class MyComponent {
    text:string = "";
    options:any = {maxLines: 1000, printMargin: false};
    
    onChange(code) {
        console.log("new code", code);
    }
}
```

# Developing

1. Install dependencies: `npm install`.
1. // hack hack hack
1. Build your changes: `npm run build`