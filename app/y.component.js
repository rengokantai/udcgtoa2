System.register(['angular2/core', './test.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var YComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            //import {OnInit} from "../node_modules/angular2/src/core/linker/interfaces";
            YComponent = (function () {
                function YComponent() {
                }
                YComponent.prototype.ngOnInit = function () {
                    this.name = "name";
                };
                YComponent = __decorate([
                    core_1.Component({
                        selector: 'y',
                        template: "{{name}}\n   <span [style.color]=\"inputElement.value==='yes'?'red':''\">teststyle</span>\n    <span [class.awesome]=\"inputElement.value==='yes'\">testclass</span>\n    <br>\n    <input type=\"text\" #inputElement (keyup)=\"0\">\n    <button [disabled]=\"inputElement.value!=='yes'\">press</button>\n    <test></test>\n    ",
                        styleUrls: ['src/css/y.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], YComponent);
                return YComponent;
            })();
            exports_1("YComponent", YComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIllDb21wb25lbnQiLCJZQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiWUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0EsNkVBQTZFO1lBRTdFO2dCQUFBQTtnQkFvQkFDLENBQUNBO2dCQUpHRCw2QkFBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUNBLE1BQU1BLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBbEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxHQUFHQTt3QkFDWkEsUUFBUUEsRUFBQ0Esc1VBT1JBO3dCQUNEQSxTQUFTQSxFQUFDQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFDM0JBLFVBQVVBLEVBQUNBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDN0JBLENBQUNBOzsrQkFRREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXBCQSxBQW9CQ0EsSUFBQTtZQXBCRCxtQ0FvQkMsQ0FBQSIsImZpbGUiOiJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xNS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7T25Jbml0fSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid5JyxcclxuICAgIHRlbXBsYXRlOmB7e25hbWV9fVxyXG4gICA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3llcyc/J3JlZCc6JydcIj50ZXN0c3R5bGU8L3NwYW4+XHJcbiAgICA8c3BhbiBbY2xhc3MuYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJ1wiPnRlc3RjbGFzczwvc3Bhbj5cclxuICAgIDxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cclxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSE9PSd5ZXMnXCI+cHJlc3M8L2J1dHRvbj5cclxuICAgIDx0ZXN0PjwvdGVzdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6WydzcmMvY3NzL3kuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOltUZXN0Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBuZ09uSW5pdCgpOmFueXtcclxuICAgICAgICB0aGlzLm5hbWU9XCJuYW1lXCI7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
