import List from './List.js';
import Display from './displayController.js';
import createToDoItem from './createToDoItem.js';
import './styles.less';

//Render Web App Layout
Display.header();
Display.appBody();

//Create array of To-Do List Items and Projects

let toDoLists = [];
let defaultList = new List('Default');
toDoLists.push(defaultList);
defaultList.setActiveList();
defaultList.displayLists(toDoLists);

//:)

/*window.onload = ()=>{
    if (localStorage.length > 0) {
        toDoLists= JSON.parse(localStorage.getItem("Lists"));
        toDoLists.forEach(list=>list.displayed=false);
        displayProjects(toDoLists);
        displayToDoCards(defaultList.items);
    } 

        const projectLists = Array.from(document.querySelectorAll(".project-card"));

        projectLists.forEach(list =>
            list.addEventListener("click", ()=>{
                let listName = document.querySelector(".name");
            selectedList=listName.textContent;
            console.log(selectedList);
        }));
    
};*/


//Event Listener that creates the pop up form to enter a new item to the to do list
const addItem = document.querySelector("#add-item");
const addProject = document.querySelector(".add-project");


addItem.addEventListener('click', ()=>{
    let selectedList;

    for (let i =0;i<toDoLists.length;i++){
        if(toDoLists[i].isDisplayed=true){
            selectedList = toDoLists[i];
        };
    };

   Display.toDoForm();

   const submit = document.querySelector('.form-submit');

    //Takes the information added to the form and creates a new ToDo object and adds it to the array of To-Do Items
    submit.addEventListener('click',()=>{
        let newItem = createToDoItem();
        selectedList.addItem(newItem);
        selectedList.displayItems(selectedList.items);

        const form = document.querySelector(".todo-form");
        const toDoArea = document.querySelector(".app-body");
        toDoArea.removeChild(form); 
  
    });
});

addProject.addEventListener("click",()=>{
    Display.projectForm();

    const submit = document.querySelector(".form-submit");
    const form = document.querySelector(".todo-form");
    const toDoArea = document.querySelector(".app-body");

    submit.addEventListener("click", ()=>{
        const projectName = document.querySelector("#name-input");
        let newList = new List(projectName.value);
        toDoArea.removeChild(form);
        toDoLists.push(newList);
        newList.displayLists(toDoLists);
        console.log(toDoLists);
        
    });
});


function saveToLocalStorage(toDoLists) {
    localStorage.clear();
    localStorage.setItem("Lists",JSON.stringify(toDoLists));
};
