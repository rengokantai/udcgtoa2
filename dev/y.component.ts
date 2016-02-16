/**
 * Created by Hernan Y.Ke on 2016/2/15.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'y',
    template:`{{name}}
    <span [class.awesome]="inputElement.value==='yes'">test</span>
    <br>
    <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls:['src/css/y.css']

})

export class YComponent {
    name = 'myname';
}