import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }     from './app.component';
import { TaskComponent }    from './task/task.component';
import { NewTaskComponent } from './newtask/newtask.component';
import { ListComponent }    from './list/list.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,TaskComponent,NewTaskComponent,ListComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }