import { Component } from '@angular/core';
     
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
    selector: 'todolist-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']    

})
export class AppComponent { 
    items: Item[] = 
    [
        { task: "work", done: false, date: "2018-01-01" },
        { task: "sleep", done: false, date: "2018-01-01" }
    ];
    addItem(text: string, date: string): void {

        if(text==null || text==undefined || text.trim()=="")
            return;
            if(date==null || date==undefined)
            return;
        this.items.push(new Item(text,date));
    }
}

