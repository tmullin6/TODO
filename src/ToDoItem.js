/*Factory Function that creates a ToDo Object with a name, 
a description, a due date, and a date that the object was created.*/

const ToDoItem = (name,desc,dueDate,createdDate,listed) => {

    
    const getTodayDate = ()=>{
        let date = new Date();
        let today = String( String(date.getFullYear())+ "-"+ '0'+String((date.getMonth()+1))+ "-"+ String(date.getDate()));

        return today;
    }

    return {name,desc,dueDate,createdDate,listed,getTodayDate}
}

export default ToDoItem;