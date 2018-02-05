import { Component } from '@angular/core';
import { Item } from '../shared/item'
import { TodoService } from '../todo.service'

@Component({
    selector: 'new-task',
    templateUrl: './newtask.component.html',
    styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent  { 
    item={};
    constructor(private todoService:TodoService){}
    addItem(text: string, date: string) {
       this.todoService.setItem(text,date);
    } 
}