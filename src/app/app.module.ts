import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }     from './app.component';
import { TaskComponent }    from './task/task.component';
import { NewTaskComponent } from './newtask/newtask.component';
import { ListComponent }    from './list/list.component';
import { TodoService }      from './todo.service';
import { ReactiveFormsModule }from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule,  FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent,TaskComponent,NewTaskComponent,ListComponent],
    providers:    [ TodoService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }