System.registerDynamic("src/index", ["@angular/core", "brace", "brace/theme/monokai", "brace/mode/html"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    $__require("brace");
    $__require("brace/theme/monokai");
    $__require("brace/mode/html");
    var AceEditorDirective = function () {
        function AceEditorDirective(elementRef) {
            this.textChanged = new core_1.EventEmitter();
            this._options = {};
            this._readOnly = false;
            this._theme = "monokai";
            this._mode = "html";
            this._autoUpdateContent = true;
            var el = elementRef.nativeElement;
            this.editor = ace["edit"](el);
            this.init();
            this.initEvents();
        }
        AceEditorDirective.prototype.init = function () {
            var ace = this.editor;
            this.editor.setOptions(this._options || {});
            this.editor.setTheme("ace/theme/" + this._theme);
            this.editor.getSession().setMode("ace/mode/" + this._mode);
            this.editor.setReadOnly(this._readOnly);
        };
        AceEditorDirective.prototype.initEvents = function () {
            var _this = this;
            this.editor.on('change', function () {
                var newVal = _this.editor.getValue();
                if (newVal === _this.oldText) return;
                if (typeof _this.oldText !== 'undefined') _this.textChanged.emit(newVal);
                _this.oldText = newVal;
            });
        };
        AceEditorDirective.prototype.ngOnInit = function () {
            if (this._setup) {
                this._setup(this.editor, ace);
            }
        };
        Object.defineProperty(AceEditorDirective.prototype, "options", {
            set: function (options) {
                this._options = options;
                this.editor.setOptions(options || {});
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
            set: function (readOnly) {
                this._readOnly = readOnly;
                this.editor.setReadOnly(readOnly);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "theme", {
            set: function (theme) {
                this._theme = theme;
                this.editor.setTheme("ace/theme/" + theme);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "mode", {
            set: function (mode) {
                this._mode = mode;
                this.editor.getSession().setMode("ace/mode/" + mode);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "text", {
            set: function (text) {
                if (text == null) text = "";
                if (this._autoUpdateContent == true) {
                    this.editor.setValue(text);
                    this.editor.clearSelection();
                    this.editor.focus();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "autoUpdateContent", {
            set: function (status) {
                this._autoUpdateContent = status;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AceEditorDirective.prototype, "setup", {
            set: function (setup) {
                this._setup = setup;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([core_1.Output('textChanged'), __metadata('design:type', Object)], AceEditorDirective.prototype, "textChanged", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "options", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "readOnly", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "theme", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "mode", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "text", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "autoUpdateContent", null);
        __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], AceEditorDirective.prototype, "setup", null);
        AceEditorDirective = __decorate([core_1.Directive({
            selector: '[ace-editor]'
        }), __metadata('design:paramtypes', [core_1.ElementRef])], AceEditorDirective);
        return AceEditorDirective;
    }();
    exports.AceEditorDirective = AceEditorDirective;
    return module.exports;
});
System.registerDynamic("ng2-ace-editor", ["./src/index"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var index_1 = $__require("./src/index");
  exports.AceEditorDirective = index_1.AceEditorDirective;
  return module.exports;
});