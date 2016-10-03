import { EventEmitter, ElementRef, OnInit } from "@angular/core";
import "brace";
import "brace/theme/monokai";
import "brace/mode/html";
export declare class AceEditorDirective implements OnInit {
    textChanged: EventEmitter<{}>;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: string;
    _autoUpdateContent: boolean;
    oldText: any;
    editor: any;
    _setup: any;
    constructor(elementRef: ElementRef);
    init(): void;
    initEvents(): void;
    ngOnInit(): void;
    options: any;
    readOnly: any;
    theme: any;
    mode: any;
    text: any;
    autoUpdateContent: any;
    setup: any;
}
