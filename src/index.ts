import {Directive, EventEmitter, Output, ElementRef, Input} from "@angular/core";
import "brace";
import "brace/theme/monokai";
import "brace/mode/html";

declare var ace:any;

@Directive({
    selector: '[ace-editor]'
})
export class AceEditorDirective {
    @Output('textChanged') textChanged = new EventEmitter();
    _options:any = {};
    _readOnly:boolean = false;
    _theme:string = "monokai";
    _mode:string = "html";
    _autoUpdateContent:boolean = true;
    oldText:any;
    editor:any;
    _setup:any;

    constructor(elementRef:ElementRef) {
        let el = elementRef.nativeElement;
        this.editor = ace["edit"](el);

        this.init();
        this.initEvents();
    }

    init() {
        let ace = this.editor;
        this._setup(this.editor, ace);
        this.editor.setOptions(this._options || {});
        this.editor.setTheme(`ace/theme/${this._theme}`);
        this.editor.getSession().setMode(`ace/mode/${this._mode}`);
        this.editor.setReadOnly(this._readOnly);
    }

    initEvents() {
        this.editor.on('change', () => {
            let newVal = this.editor.getValue();
            if (newVal === this.oldText) return;
            if (typeof this.oldText !== 'undefined')
                this.textChanged.emit(newVal);
            this.oldText = newVal;
        });
    }

    @Input() set options(options:any) {
        this._options = options;
        this.editor.setOptions(options || {});
    }

    @Input() set readOnly(readOnly:any) {
        this._readOnly = readOnly;
        this.editor.setReadOnly(readOnly);
    }

    @Input() set theme(theme:any) {
        this._theme = theme;
        this.editor.setTheme(`ace/theme/${theme}`);
    }

    @Input() set mode(mode:any) {
        this._mode = mode;
        this.editor.getSession().setMode(`ace/mode/${mode}`);
    }

    @Input() set text(text:any) {
        if (text == null)
            text = "";

        if (this._autoUpdateContent == true) {
            this.editor.setValue(text);
            this.editor.clearSelection();
            this.editor.focus();
        }
    }

    @Input() set autoUpdateContent(status:any) {
        this._autoUpdateContent = status;
    }

    @Input() set setup(setup:any) {
        if (!setup) {
            this._setup = () => console.log('No setup function passed in.');
        } else {
            this._setup = setup;
        }
    }
}