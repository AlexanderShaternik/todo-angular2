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
        { task: "wake up", done: false, date: "2018-01-01" },
        { task: "work", done: false, date: "2018-01-01" },
        { task: "eat", done: false, date: "2018-01-01" },
        { task: "sleep", done: false, date: "2018-01-01" },
        { task: "repeat", done: false, date: "2018-01-01" }
    ];
    addItem(text: string, date: string): void {
        if(!text || !date)
            return;
        this.items.push(new Item(text,date));
        console.log(this.items);
    };
    checkTask(item:{task: string;done: boolean;date :string;}){
        item.done = !item.done;
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] === item){
                this.items.splice(i,1);
                this.items.push(item);
            } 
        } 
    };
    removeTask(item:{}){
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] === item){
                this.items.splice(i,1);
            } 
        } 
    }
}

