import { Component,Input } from '@angular/core';

export interface IItem{
    task: string;
    done: boolean;
    date :string; 
}

@Component({
    selector: 'todolist-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']    
})

export class AppComponent  { 
    @Input() item:IItem;
    items: IItem[]=
    [
        { task: "wake up", done: false, date: "2018-01-01" },
        { task: "work", done: false, date: "2018-01-01" },
        { task: "eat", done: false, date: "2018-01-01" },
        { task: "sleep", done: false, date: "2018-01-01" },
        { task: "repeat", done: false, date: "2018-01-01" }
    ];

}

