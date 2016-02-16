/**
 * Created by Hernan Y.Ke on 2016/2/15.
 */
import {Component} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector:'y',
    template:`{{name}}
   <span [style.color]="inputElement.value==='yes'?'red':''">teststyle</span>
    <span [class.awesome]="inputElement.value==='yes'">testclass</span>
    <br>
    <input type="text" #inputElement (keyup)="0">
    <button [disabled]="inputElement.value!=='yes'">press</button>
    <test></test>
    `,
    styleUrls:['src/css/y.css'],
    directives:[TestComponent]
})

export class YComponent {
    name = 'myname';
}