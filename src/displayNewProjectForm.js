//Function to create and display the DOM Elements for the New Project Input Form
function displayProjectForm (){

    const appArea = document.querySelector('.app-body');

    //Creates all DOM Elements of the Input Form
    const projectForm = document.createElement("div");
    const title = document.createElement('p');
    const name = document.createElement('p');
    const enterName = document.createElement('input');
    const submit = document.createElement('button');

    //Text Content for Input Headers
    title.textContent="Enter New To Do List"
    name.textContent="Name:"
    submit.textContent="Submit";

    title.classList.add("form-text");
    name.classList.add("form-text");

    //Set Type, Placeholder text, and Id for each input element
    enterName.type="input";
    enterName.placeholder = "Enter List Name";
    enterName.id = "name-input";


    submit.type='submit';
    submit.classList.add('form-submit');
    
   

    projectForm.classList.add('todo-form');

    appArea.appendChild(projectForm);

    projectForm.appendChild(title);
    projectForm.appendChild(name);
    projectForm.appendChild(enterName);
    projectForm.appendChild(submit);

}

export default displayProjectForm;