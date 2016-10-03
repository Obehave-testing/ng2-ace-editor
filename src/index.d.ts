import { EventEmitter, ElementRef } from '@angular/core';
import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/html';
export declare class AceEditorDirective {
    textChanged: EventEmitter<{}>;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: string;
    _autoUpdateContent: boolean;
    oldText: any;
    editor: any;
    setup: Function;
    constructor(elementRef: ElementRef);
    init(): void;
    initEvents(): void;
    options: any;
    readOnly: any;
    theme: any;
    mode: any;
    text: any;
    autoUpdateContent: any;
}
