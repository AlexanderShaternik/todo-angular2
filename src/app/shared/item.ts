export class Item{
    task: string;
    done: boolean;
    date :string; 
    constructor(task: string, date :string) {
        this.task = task;
        this.done = false;
        this.date = date;
    }
}