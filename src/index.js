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
var core_1 = require('@angular/core');
require('brace');
require('brace/theme/monokai');
require('brace/mode/html');
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
        this.setup(this.editor, ace);
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
    __decorate([
        core_1.Output('textChanged'), 
        __metadata('design:type', Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], AceEditorDirective.prototype, "setup", void 0);
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
    AceEditorDirective = __decorate([
        core_1.Directive({
            selector: '[ace-editor]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AceEditorDirective);
    return AceEditorDirective;
}());
exports.AceEditorDirective = AceEditorDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1FLGVBQWUsQ0FBQyxDQUFBO0FBQ25GLFFBQU8sT0FBTyxDQUFDLENBQUE7QUFDZixRQUFPLHFCQUFxQixDQUFDLENBQUE7QUFDN0IsUUFBTyxpQkFBaUIsQ0FBQyxDQUFBO0FBT3pCO0lBWUUsNEJBQVksVUFBc0I7UUFYWCxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3hELGFBQVEsR0FBTyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVUsU0FBUyxDQUFDO1FBQzFCLFVBQUssR0FBVSxNQUFNLENBQUM7UUFDdEIsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO1FBT2hDLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFhLElBQUksQ0FBQyxNQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFZLElBQUksQ0FB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cUJBeUU5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnYnJhY2UnO1xuaW1wb3J0ICdicmFjZS90aGVtZS9tb25va2FpJztcbmltcG9ydCAnYnJhY2UvbW9kZS9odG1sJztcblxuZGVjbGFyZSB2YXIgYWNlOmFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjZS1lZGl0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY2VFZGl0b3JEaXJlY3RpdmUge1xuICBAT3V0cHV0KCd0ZXh0Q2hhbmdlZCcpIHRleHRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBfb3B0aW9uczphbnkgPSB7fTtcbiAgX3JlYWRPbmx5OmJvb2xlYW4gPSBmYWxzZTtcbiAgX3RoZW1lOnN0cmluZyA9IFwibW9ub2thaVwiO1xuICBfbW9kZTpzdHJpbmcgPSBcImh0bWxcIjtcbiAgX2F1dG9VcGRhdGVDb250ZW50OmJvb2xlYW4gPSB0cnVlO1xuICBvbGRUZXh0OmFueTtcbiAgZWRpdG9yOmFueTtcbiAgQElucHV0KClcbiAgc2V0dXA6RnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGxldCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVkaXRvciA9IGFjZVtcImVkaXRcIl0oZWwpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCBhY2UgPSB0aGlzLmVkaXRvcjtcbiAgICB0aGlzLnNldHVwKHRoaXMuZWRpdG9yLGFjZSk7XG4gICAgdGhpcy5lZGl0b3Iuc2V0T3B0aW9ucyh0aGlzLl9vcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhpcy5fdGhlbWV9YCk7XG4gICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5fbW9kZX1gKTtcbiAgICB0aGlzLmVkaXRvci5zZXRSZWFkT25seSh0aGlzLl9yZWFkT25seSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBsZXQgbmV3VmFsID0gdGhpcy5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmKG5ld1ZhbCA9PT0gdGhpcy5vbGRUZXh0KSByZXR1cm47XG4gICAgICBpZih0eXBlb2YgdGhpcy5vbGRUZXh0ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgdGhpcy50ZXh0Q2hhbmdlZC5lbWl0KG5ld1ZhbCk7XG4gICAgICB0aGlzLm9sZFRleHQgPSBuZXdWYWw7XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKG9wdGlvbnMgfHwge30pO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJlYWRPbmx5KHJlYWRPbmx5OiBhbnkpIHtcbiAgICB0aGlzLl9yZWFkT25seSA9IHJlYWRPbmx5O1xuICAgIHRoaXMuZWRpdG9yLnNldFJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0aGVtZSh0aGVtZTogYW55KSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgbW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHttb2RlfWApO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHRleHQodGV4dDogYW55KSB7XG4gICAgICBpZih0ZXh0ID09IG51bGwpXG4gICAgICAgICAgdGV4dCA9IFwiXCI7XG5cbiAgICAgIGlmKHRoaXMuX2F1dG9VcGRhdGVDb250ZW50ID09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgICAgICB0aGlzLmVkaXRvci5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yLmZvY3VzKCk7XG4gICAgICB9XG4gIH1cblxuICBASW5wdXQoKSBzZXQgYXV0b1VwZGF0ZUNvbnRlbnQoc3RhdHVzOiBhbnkpIHtcbiAgICAgIHRoaXMuX2F1dG9VcGRhdGVDb250ZW50ID0gc3RhdHVzO1xuICB9XG59XG4iXX0=