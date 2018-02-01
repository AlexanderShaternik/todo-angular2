import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { Task } from './task/task.component';
import { NewTask }       from './newtask/newtask.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,Task,NewTask],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }