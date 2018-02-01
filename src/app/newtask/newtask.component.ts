import { Component, Input, Output } from '@angular/core';
import { IItem }  from  '../app.component';

class Item{
    task: string;
    done: boolean;
    date :string; 
    constructor(task: string, date :string) {
        this.task = task;
        this.done = false;
        this.date = date;
    }
}

@Component({
    selector: 'new-task',
    templateUrl: './newtask.component.html',
    styleUrls: ['./newtask.component.css']
})

export class NewTask  { 
    @Input() items:IItem[];
    addItem(text: string, date: string): void {
        if(!text || !date)
            return;
        this.items.push(new Item(text,date));
    };
}