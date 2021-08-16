import add from './2x/outline_add_circle_outline_white_24dp.png';

//Display Module that renders app layout and forms to the page
const Display = (()=>{

    //Displays the web app header.
    const header = ()=> {
        const header = document.createElement('div');
        const title = document.createElement('div');
        const git = document.createElement('div');

        header.classList.add("header");
        title.classList.add("head-text");
        git.classList.add("git-text");

        title.textContent="List-it";
        git.textContent="Check out my github for more";

        document.body.appendChild(header);
        header.appendChild(title);
        header.appendChild(git);
    };

    //Displays the main body of the web app.
    const appBody =()=>{

        const appArea = document.createElement('div');
        const sideBar = document.createElement('div');
        const projectList = document.createElement("div");
        const addProject = document.createElement('div');
        const toDoArea = document.createElement('div');
        const cardList = document.createElement('div');
        const addItemDiv = document.createElement('div');
    
        appArea.classList.add("app-body");
        toDoArea.classList.add("list-area");
        cardList.classList.add("card-list");
    
        sideBar.classList.add("side-bar");
        projectList.classList.add("project-list");
        addProject.classList.add("add-project");
       
        addProject.textContent = "Add New List";
    
        const addItem = new Image();
        addItem.src=add;
        addItem.id ="add-item";
    
        addItemDiv.classList.add('add-button');
        document.body.appendChild(appArea);
        appArea.appendChild(sideBar);
        appArea.appendChild(toDoArea);
        appArea.appendChild(addItemDiv);
        toDoArea.appendChild(cardList);
        
        addItemDiv.appendChild(addItem);
    
        sideBar.appendChild(projectList);
        sideBar.appendChild(addProject);
    };

    //Displays a form for the user to input To-Do Item information.
    const toDoForm =()=> {
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
    };
    
    //Displays a form for the user to input informaion for new List objects
    const projectForm= ()=>{
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

    };
  
    return{header,appBody,toDoForm,projectForm}
})();

export default Display;