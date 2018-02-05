import { Component,Input } from '@angular/core';
import { Item } from '../shared/item'

@Component({
    selector: 'list',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent{
    @Input() items:Item[];
    delete(item:Item){
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
    }
  
}