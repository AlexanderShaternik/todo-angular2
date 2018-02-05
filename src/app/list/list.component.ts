import { Component,OnInit } from '@angular/core';
import { Item } from '../shared/item'
import { TodoService } from "../todo.service"
import { items } from '../shared/data';

@Component({
    selector: 'list',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
   items:Item[];
    constructor(private todoService:TodoService ){
        this.items = [];
    }
    
    ngOnInit(){
        this.items = this.todoService.getItems();
    }

    delete(item:Item){
        this.todoService.deleteItem(item);
    }

    onClear(items:Item[]){
        this.todoService.clear(items);
    }

    onUnloadToStorage(items:Item[]){
        this.todoService.unloadFromStorage(items);
    }
    onSaveToStorage(items:Item[]){
        this.todoService.saveToStorage(items);
    }
}