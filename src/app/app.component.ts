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
    template: `
    <div class="page-header">
        <h1> To Do List </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-sm-6">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Задание" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-6 ">
                    <input type="date" class="form-control" [(ngModel)]="date" placeholder = "YYYY-MM-DD" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-6">
                    <button class="btn btn-outline-primary" (click)="addItem(text,date)">Добавить</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container col-xs-10 ">
        <div *ngFor="let item of items" class="row">
            <div class="col-xs-1 ">
                <input type="checkbox" [(ngModel)]="item.done" />
            </div>
            <div class="col-xs-5 ">
                <p>{{item.task}}</p>
            </div>
            <div class="col-xs-5 ">
                <p>{{item.date}}</p>
            </div>
            <div class="col-xs-1 ">
                <button type="button" class="close"  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>  
    </div>
    `
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

