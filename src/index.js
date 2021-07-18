import createToDoItem from './createToDoItem.js';
import createToDoForm from "./createToDoForm.js";
import createToDoCard from "./createToDoCard.js";
import './styles.less';
import add from './2x/outline_add_circle_outline_white_24dp.png'

//Load up header to web app
renderHeader();

//Renders the body of the web app
renderAppBody();

//Create array of To-Do List Items
let toDoItems = [];

//Event Listener that creates the pop up form to enter a new item to the to do list
const addItem = document.querySelector("#Add-item");
addItem.addEventListener('click', ()=>{
   createToDoForm();

   const submit = document.querySelector('.form-submit');

    //Takes the information added to the form and creates a new ToDo object and adds it to the array of To-Do Items
    submit.addEventListener('click',()=>{
        let newItem = createToDoItem();

        const form = document.querySelector(".todo-form");

        while(form.firstChild){
            form.removeChild(form.lastChild);
        };

        toDoItems.push(newItem);
        createToDoCard(newItem);
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
    const toDoArea = document.createElement('div');
    const addItemDiv = document.createElement('div');

    appArea.classList.add("app-body");
    sideBar.classList.add("side-bar");
    toDoArea.classList.add("list-area");

    sideBar.textContent = "List of projects and lists here";
    toDoArea.textContent = "List of To Do Items here";

    const addItem = new Image();
    addItem.src=add;
    addItem.id = "Add-item";

    addItemDiv.classList.add('add-button');
    document.body.appendChild(appArea);
    appArea.appendChild(sideBar);
    appArea.appendChild(toDoArea);
    toDoArea.appendChild(addItemDiv);
    addItemDiv.appendChild(addItem);
};