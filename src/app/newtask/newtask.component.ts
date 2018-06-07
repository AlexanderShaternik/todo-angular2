import { Component } from '@angular/core';
import { Item } from '../shared/item'
import { TodoService } from '../todo.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
    selector: 'new-task',
    templateUrl: './newtask.component.html',
    styleUrls: ['./newtask.component.css']
})

export class NewTaskComponent  { 
    item={};

    submit(){
        console.log(this.myForm);
        this.todoService.setItem(this.myForm.value.userTask,this.myForm.value.userDate);
        this.myForm.reset();
    }

    myForm : FormGroup;
    constructor(private todoService:TodoService){
        this.myForm = new FormGroup({    
            "userTask": new FormControl("",Validators.required),
            "userDate": new FormControl("", [Validators.required, this.userDateValidator]),
        })
    }
    
    userDateValidator(control: FormControl): {[s:string]:boolean}{
        if(2018 > +control.value.split('-')[0]){
            return {"userDate": true};
        }
        return null;
    }

}