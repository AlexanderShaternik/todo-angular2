import { Component} from '@angular/core';
import { Item }     from './shared/item';
import { items }    from './shared/data';

@Component({
    selector: 'todolist-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']    
})

export class AppComponent  { 
    items:Item[] = items;
    onChanged(item:Item){
        console.log(item);
        this.items.push(item);
    }
}

