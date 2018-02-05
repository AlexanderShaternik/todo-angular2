import { Component,OnInit } from '@angular/core';
import { Item } from '../shared/item'
import { TodoService } from "../todo.service"

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
  
}