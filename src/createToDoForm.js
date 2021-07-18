//Function to create the DOM Elements for the To Do Item Input Form
function createToDoForm (){

    const appArea = document.querySelector('.app-body');

    //Creates all DOM Elements of the Input Form
    const todoForm = document.createElement("div");
    const name = document.createElement('p');
    const enterName = document.createElement('input');
    const desc = document.createElement('p');
    const enterDesc = document.createElement('input');
    const dueDate = document.createElement('p');
    const enterDate = document.createElement('input');
    const submit = document.createElement('button');

    //Text Content for Input Headers
    name.textContent="Task:"
    desc.textContent="Description:";
    dueDate.textContent="Due Date:";
    submit.textContent="Submit";

    name.classList.add("form-text");
    desc.classList.add("form-text");
    dueDate.classList.add("form-text");

    //Set Type, Placeholder text, and Id for each input element
    enterName.type="input";
    enterName.placeholder = "Enter Task";
    enterName.id = "name-input";

    enterDesc.type="input";
    enterDesc.placeholder = "Description (optional)";
    enterDesc.id = "desc-input";

    enterDate.type="input";
    enterDate.placeholder="MM/DD/YYYY";
    enterDate.id = "date-input";

    submit.type='submit';
    submit.classList.add('form-submit');
    
   

    todoForm.classList.add('todo-form');

    appArea.appendChild(todoForm);

    todoForm.appendChild(name);
    todoForm.appendChild(enterName);
    todoForm.appendChild(desc);
    todoForm.appendChild(enterDesc);
    todoForm.appendChild(dueDate);
    todoForm.appendChild(enterDate);
    todoForm.appendChild(submit);

}

export default createToDoForm;