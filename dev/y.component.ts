/**
 * Created by Hernan Y.Ke on 2016/2/15.
 */
import {Component, OnInit} from 'angular2/core';
import {TestComponent} from './test.component';
//import {OnInit} from "../node_modules/angular2/src/core/linker/interfaces";

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

export class YComponent implements OnInit{
    name: string;
    ngOnInit():any{
        this.name="name";
    }

}