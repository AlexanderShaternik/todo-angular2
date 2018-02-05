import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item }      from '../shared/item';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent { 
    @Input() item:Item;
    @Output() delete= new EventEmitter();
    onDelete(){
        this.delete.emit(this.item);
    }

    checkTask(item:Item){
        this.item.done = !this.item.done;
    };
}