import { Item }  from "./shared/item"
import { items } from "./shared/data"

export class TodoService{
    items:Item[]= items;

    getItems():Item[]{
        return this.items;
    }
    
    deleteItem(item:Item){
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
    }

    clear(items:Item[]){
        this.items.splice(0,items.length);
    }

    setItem(text: string, date: string){
        if(!text || !date) return;
        let item = new Item(text,date);
        this.items.push(item);
    }

    // setItems(items:Item[]){
    //     this.items = items;
    // }
    
    unloadFromStorage(items:Item[]){
        let arr = JSON.parse(localStorage.getItem("todo"));
        for (let i = 0; i < arr.length; i++){
            this.items.push(arr[i]);
        }
    }

    saveToStorage(items:Item[]){
       localStorage.setItem("todo",JSON.stringify(items));
    }
}
