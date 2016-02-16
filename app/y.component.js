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
            YComponent = (function () {
                function YComponent() {
                    this.name = 'myname';
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIllDb21wb25lbnQiLCJZQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7b0JBZUlDLFNBQUlBLEdBQUdBLFFBQVFBLENBQUNBO2dCQUNwQkEsQ0FBQ0E7Z0JBaEJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxHQUFHQTt3QkFDWkEsUUFBUUEsRUFBQ0Esc1VBT1JBO3dCQUNEQSxTQUFTQSxFQUFDQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFDM0JBLFVBQVVBLEVBQUNBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDN0JBLENBQUNBOzsrQkFJREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQWhCRCxtQ0FnQkMsQ0FBQSIsImZpbGUiOiJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xNS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tICcuL3Rlc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3knLFxyXG4gICAgdGVtcGxhdGU6YHt7bmFtZX19XHJcbiAgIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJz8ncmVkJzonJ1wiPnRlc3RzdHlsZTwvc3Bhbj5cclxuICAgIDxzcGFuIFtjbGFzcy5hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZT09PSd5ZXMnXCI+dGVzdGNsYXNzPC9zcGFuPlxyXG4gICAgPGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlIT09J3llcydcIj5wcmVzczwvYnV0dG9uPlxyXG4gICAgPHRlc3Q+PC90ZXN0PlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MveS5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6W1Rlc3RDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgWUNvbXBvbmVudCB7XHJcbiAgICBuYW1lID0gJ215bmFtZSc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
