import ToDoItem from "./ToDoItem.js";

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

        return item;
}



export default createToDoItem;