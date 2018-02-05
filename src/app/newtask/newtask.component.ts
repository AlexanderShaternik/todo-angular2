import { Component,EventEmitter, Output } from '@angular/core';
import { Item } from '../shared/item'


@Component({
    selector: 'new-task',
    templateUrl: './newtask.component.html',
    styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent { 
    item={};
    @Output() onChanged = new EventEmitter<{}>();
    addItem(text: string, date: string) {
        if(!text || !date) return;
        console.log(text,date);
        this.item = new Item(text,date);
        this.onChanged.emit(this.item);
    }
   
}