import {Component} from 'angular2/core'
import {ZippyComponent} from './zippy.component'
import {ZippyService} from './zippy.service'

@Component({
    selector:'my-app',
    template:`<div *ngFor="#detail of details">
    <zippy title="{{detail.title}}">
    {{detail.tweet}}
    </zippy>
    </div>
     `,
    directives:[ZippyComponent],
    providers:[ZippyService],
    styles:[`
    zippy{width:100%;}
    `]
})
export class AppComponent{
    details;
    constructor(zippyService: ZippyService){
        this.details = zippyService.getData();
    }
}