import { toDoItems } from "./index.js";

//Function that creates a To Do Item object and returns the object with the user inputted values
function createToDoItem () {

    const nameInput = document.querySelector('#name-input');
    const descInput = document.querySelector('#desc-input');
    const dateInput = document.querySelector('#date-input');

    
        let name = nameInput.value;
        let desc = descInput.value;
        let date = dateInput.value;
       
        let item = ToDo(name,desc,date);
        let today = item.getTodayDate();
        item.createdDate = today;

        return item;
    
    


}

/*Factory Function that creates a ToDo Object with a name, 
a description, a due date, and a date that the object was created.*/
const ToDo = (name,desc,dueDate, index, createdDate) => {
  

    
    const getTodayDate = ()=>{
        let date = new Date();
        let today = String(date.getMonth()+1)+ "/"+ String(date.getDate())+ "/" + String(date.getFullYear());

        return today;
    }

    return {name,desc,dueDate,createdDate,index, getTodayDate}
}

export default createToDoItem