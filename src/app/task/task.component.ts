import { Component, Input } from '@angular/core';
import { IItem }  from  '../app.component';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class Task { 
    @Input() items:IItem[];
    @Input() item:IItem;
    checkTask(item:IItem){
        item.done = !item.done;
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items.splice(i,1);
                this.items.push(item);
            } 
        } 
    };
    removeTask(item:IItem){
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items.splice(i,1);
            } 
        } 
    }
}