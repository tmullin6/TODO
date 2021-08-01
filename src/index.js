import createToDoItem from './createToDoItem.js';
import createToDoForm from "./displayToDoForm.js";
import displayToDoCards from "./displayToDoCards.js";
import addItemToList from './addItemToList.js';
import ProjectList from './ProjectList.js';
import displayProjectForm from './displayNewProjectForm.js';
import createProjectList from './createNewProject.js';
import displayProjects from './displayProjectLists.js';
import './styles.less';
import add from './2x/outline_add_circle_outline_white_24dp.png'

//Load up header to web app
renderHeader();

//Renders the body of the web app
renderAppBody();

//Create array of To-Do List Items and Projects

let toDoLists = [];
let selectedList;
let defaultList = ProjectList("Default");
selectedList = defaultList;
toDoLists.push(defaultList);
//:)

window.onload = ()=>{
    console.log(localStorage);
    if (localStorage.length > 0) {
        toDoLists= JSON.parse(localStorage.getItem("Lists"));
        toDoLists.forEach(list=>list.displayed=false);
        displayProjects(toDoLists);
        displayToDoCards(defaultList.items);
    }
   

    
};


//Event Listener that creates the pop up form to enter a new item to the to do list
const addItem = document.querySelector("#add-item");
const addProject = document.querySelector(".add-project");


addItem.addEventListener('click', ()=>{
   createToDoForm();

   const submit = document.querySelector('.form-submit');

    //Takes the information added to the form and creates a new ToDo object and adds it to the array of To-Do Items
    submit.addEventListener('click',()=>{
        let newItem = createToDoItem();
        addItemToList(newItem,selectedList.items);
        displayToDoCards(selectedList.items);
        saveToLocalStorage(toDoLists)
        const form = document.querySelector(".todo-form");
        const toDoArea = document.querySelector(".app-body");
       
        toDoArea.removeChild(form);
        
        
    });

});

addProject.addEventListener("click",()=>{
    displayProjectForm();

    const submit = document.querySelector(".form-submit");
    const form = document.querySelector(".todo-form");
    const toDoArea = document.querySelector(".app-body");

    submit.addEventListener("click", ()=>{
        let newList = createProjectList();
        toDoLists.push(newList);
        toDoArea.removeChild(form);
        displayProjects(toDoLists);
        saveToLocalStorage(toDoLists)
       
        for (let i=0;i<toDoLists.length;i++){
            const project = document.querySelector(".project-list");
            project.addEventListener("click",()=>{
                selectedList=toDoLists[i];
            });
        }
    });

});




//Function that Creates all DOM Elements for the Web App Header
function renderHeader (){

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

//Function that Creates the DOM elements that make up the main body of the web app
function renderAppBody() {

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

function saveToLocalStorage(toDoLists) {
    localStorage.clear();
    localStorage.setItem("Lists",JSON.stringify(toDoLists));
};

