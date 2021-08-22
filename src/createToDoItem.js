import ToDoItem from "./ToDoItem.js";
import parseISO from "date-fns/parseISO";
import compareAsc from 'date-fns/compareAsc';


//Function that creates a To Do Item object and returns the object with the user inputted values
function createToDoItem () {

    const nameInput = document.querySelector('#name-input');
    const descInput = document.querySelector('#desc-input');
    const dateInput = document.querySelector('#date-input');

    
        let name = nameInput.value;
        let desc = descInput.value;
        let date = dateInput.value;

        let item = ToDoItem(name,desc,date);
        let today = item.getTodayDate();

        item.listed = false;
        item.createdDate = today;

        //if(compareAsc(parseISO(date),today)!=-1){
          //  alert("Due Date cannot be before today! Enter new due date");
        
            //  return;
         //}
       
        return item;
}



export default createToDoItem;