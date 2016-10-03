"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("brace");
require("brace/theme/monokai");
require("brace/mode/html");
var AceEditorDirective = (function () {
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
            if (newVal === _this.oldText)
                return;
            if (typeof _this.oldText !== 'undefined')
                _this.textChanged.emit(newVal);
            _this.oldText = newVal;
        });
    };
    AceEditorDirective.prototype.ngOnInit = function () {
        if (this._setup) {
            this._setup(this.editor, {});
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
            if (text == null)
                text = "";
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
            if (!setup) {
                this._setup = function () { return console.log('No setup function passed in.'); };
            }
            else {
                this._setup = setup;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output('textChanged'), 
        __metadata('design:type', Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "options", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "readOnly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "theme", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "mode", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "autoUpdateContent", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AceEditorDirective.prototype, "setup", null);
    AceEditorDirective = __decorate([
        core_1.Directive({
            selector: '[ace-editor]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AceEditorDirective);
    return AceEditorDirective;
}());
exports.AceEditorDirective = AceEditorDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlFLGVBQWUsQ0FBQyxDQUFBO0FBQ3pGLFFBQU8sT0FBTyxDQUFDLENBQUE7QUFDZixRQUFPLHFCQUFxQixDQUFDLENBQUE7QUFDN0IsUUFBTyxpQkFBaUIsQ0FBQyxDQUFBO0FBT3pCO0lBV0ksNEJBQVksVUFBcUI7UUFWVixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3hELGFBQVEsR0FBTyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVUsU0FBUyxDQUFDO1FBQzFCLFVBQUssR0FBVSxNQUFNLENBQUM7UUFDdEIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO1FBTTlCLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWEsSUFBSSxDQUFDLE1BQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQVksSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FB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QTtJQW5GRDtRQUFDLGFBQU0sQ0FBQyxhQUFhLENBQUM7OzJEQUFBO0lBMEN0QjtRQUFDLFlBQUssRUFBRTs7O3FEQUFBO0lBS1I7UUFBQyxZQUFLLEVBQUU7OztzREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzs7bURBQUE7SUFLUjtRQUFDLFlBQUssRUFBRTs7O2tEQUFBO0lBS1I7UUFBQyxZQUFLLEVBQUU7OztrREFBQTtJQVdSO1FBQUMsWUFBSyxFQUFFOzs7K0RBQUE7SUFJUjtRQUFDLFlBQUssRUFBRTs7O21EQUFBO0lBakZaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1NBQzNCLENBQUM7OzBCQUFBO0lBc0ZGLHlCQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQXJGWSwwQkFBa0IscUJBcUY5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFwiYnJhY2VcIjtcbmltcG9ydCBcImJyYWNlL3RoZW1lL21vbm9rYWlcIjtcbmltcG9ydCBcImJyYWNlL21vZGUvaHRtbFwiO1xuXG5kZWNsYXJlIHZhciBhY2U6YW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thY2UtZWRpdG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgQWNlRWRpdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KCd0ZXh0Q2hhbmdlZCcpIHRleHRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIF9vcHRpb25zOmFueSA9IHt9O1xuICAgIF9yZWFkT25seTpib29sZWFuID0gZmFsc2U7XG4gICAgX3RoZW1lOnN0cmluZyA9IFwibW9ub2thaVwiO1xuICAgIF9tb2RlOnN0cmluZyA9IFwiaHRtbFwiO1xuICAgIF9hdXRvVXBkYXRlQ29udGVudDpib29sZWFuID0gdHJ1ZTtcbiAgICBvbGRUZXh0OmFueTtcbiAgICBlZGl0b3I6YW55O1xuICAgIF9zZXR1cDphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgbGV0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmVkaXRvciA9IGFjZVtcImVkaXRcIl0oZWwpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBsZXQgYWNlID0gdGhpcy5lZGl0b3I7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGlzLl90aGVtZX1gKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5fbW9kZX1gKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0UmVhZE9ubHkodGhpcy5fcmVhZE9ubHkpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgPT09IHRoaXMub2xkVGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9sZFRleHQgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMudGV4dENoYW5nZWQuZW1pdChuZXdWYWwpO1xuICAgICAgICAgICAgdGhpcy5vbGRUZXh0ID0gbmV3VmFsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHVwKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR1cCh0aGlzLmVkaXRvciwge30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczphbnkpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHJlYWRPbmx5KHJlYWRPbmx5OmFueSkge1xuICAgICAgICB0aGlzLl9yZWFkT25seSA9IHJlYWRPbmx5O1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRSZWFkT25seShyZWFkT25seSk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHRoZW1lKHRoZW1lOmFueSkge1xuICAgICAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgICAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IG1vZGUobW9kZTphbnkpIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKGBhY2UvbW9kZS8ke21vZGV9YCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHRleHQodGV4dDphbnkpIHtcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHRleHQgPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvVXBkYXRlQ29udGVudCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGF1dG9VcGRhdGVDb250ZW50KHN0YXR1czphbnkpIHtcbiAgICAgICAgdGhpcy5fYXV0b1VwZGF0ZUNvbnRlbnQgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHNldHVwKHNldHVwOmFueSkge1xuICAgICAgICBpZiAoIXNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR1cCA9ICgpID0+IGNvbnNvbGUubG9nKCdObyBzZXR1cCBmdW5jdGlvbiBwYXNzZWQgaW4uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR1cCA9IHNldHVwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==