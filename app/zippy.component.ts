import {Component, Input} from 'angular2/core'

@Component({
    selector:'zippy',
    template:`
    <div class="panel panel-default">
        <div class="panel-heading" (click)="onClick()">
            {{title}}  <i 
                        class="glyphicon"
                        [ngClass]="{
                            'glyphicon-chevron-down':!isOpen,
                            'glyphicon-chevron-up':isOpen
                        }"
                         ></i>
        </div>
        <div class="panel-body" [hidden]="isOpen" >
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styles:[`
    .left{
        float:left;
    }
    .right{
        float:right;
    }
    .glyphicon{
        cursor:pointer;
    }
    `]
})
export class ZippyComponent{
    @Input() title;
    isOpen: true;
    onClick(){
        this.isOpen = !this.isOpen;
    }
}