import { Component} from '@angular/core';
import { Item }     from './shared/item';
import { items }    from './shared/data';

@Component({
    selector: 'todolist-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']    
})

export class AppComponent  {
    title:string = "To Do List"; 
}

