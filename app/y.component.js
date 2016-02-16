System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var YComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            YComponent = (function () {
                function YComponent() {
                    this.name = 'myname';
                }
                YComponent = __decorate([
                    core_1.Component({
                        selector: 'y',
                        template: "{{name}}\n    <span [class.awesome]=\"inputElement.value==='yes'\">test</span>\n    <br>\n    <input type=\"text\" #inputElement (keyup)=\"0\">\n    ",
                        styleUrls: ['src/css/y.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], YComponent);
                return YComponent;
            })();
            exports_1("YComponent", YComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIllDb21wb25lbnQiLCJZQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7b0JBWUlDLFNBQUlBLEdBQUdBLFFBQVFBLENBQUNBO2dCQUNwQkEsQ0FBQ0E7Z0JBYkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLEdBQUdBO3dCQUNaQSxRQUFRQSxFQUFDQSx1SkFJUkE7d0JBQ0RBLFNBQVNBLEVBQUNBLENBQUNBLGVBQWVBLENBQUNBO3FCQUU5QkEsQ0FBQ0E7OytCQUlEQTtnQkFBREEsaUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELG1DQWFDLENBQUEiLCJmaWxlIjoieS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTUuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid5JyxcclxuICAgIHRlbXBsYXRlOmB7e25hbWV9fVxyXG4gICAgPHNwYW4gW2NsYXNzLmF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3llcydcIj50ZXN0PC9zcGFuPlxyXG4gICAgPGJyPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3MveS5jc3MnXVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBZQ29tcG9uZW50IHtcclxuICAgIG5hbWUgPSAnbXluYW1lJztcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
