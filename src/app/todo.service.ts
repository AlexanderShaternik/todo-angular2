import { Item }  from "./shared/item"
import { items } from "./shared/data"

export class TodoService{
    items:Item[]= items;

    getItems():Item[]{
    return this.items;
    }

    addNewItem(text: string, date: string){
        if(!text || !date) return;
        let item = new Item(text,date);
        this.items.push(item);
    }

    deleteItem(item:Item){
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
    }


}
