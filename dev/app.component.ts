import {Component} from 'angular2/core';
import {YComponent} from './y.component';

@Component({
    selector: 'my-app',
    template: `start <y></y>`,
    directives:[YComponent]
})
export class AppComponent {

}