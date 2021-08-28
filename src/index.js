import List from "./List.js";
import Display from "./displayController.js";
import createToDoItem from "./createToDoItem.js";

import "./styles.less";

//Render Web App Layout
Display.header();
Display.appBody();

//Create an array to save List objects
let toDoLists = [];
let selectedList;
//:)

//Load To-Do lists stored in local storage and display the default list when page is loaded.
if (localStorage.length > 0) {
  let storedLists = JSON.parse(localStorage.getItem("Lists"));

  for (let i = 0; i < storedLists.length; i++) {
    let newList = new List(`${storedLists[i].name}`);
    newList.isDisplayed = false;
    newList.isListed = false;
    newList.items = storedLists[i].items;
    toDoLists.push(newList);
  }

  let defaultList = toDoLists[0];
  defaultList.isDisplayed = true;
  defaultList.displayLists(toDoLists);
  defaultList.displayItems(defaultList.items);
}

//If no lists exist in storage, create a default list and add it to the page.
else {
  let defaultList = new List("Default");
  defaultList.isDisplayed = true;
  toDoLists.push(defaultList);
  defaultList.displayLists(toDoLists);
}

//Event Listener that creates the pop up form to enter a new item to the to do list
const addItem = document.querySelector("#add-item");
const addProject = document.querySelector(".add-project");

addItem.addEventListener("click", () => {
  //Find which list has been selected by the user and set that list as the active list for adding new items.
  for (let i = 0; i < toDoLists.length; i++) {
    if (toDoLists[i].isDisplayed == true) {
      selectedList = toDoLists[i];
    }
  }

  Display.toDoForm(selectedList.name);

  const submit = document.querySelector(".form-submit");

  /*Takes the user input information and creates a new ToDo object and adds it to the user selected list. 
    After submit, the lists are saved to user's local storage*/
  submit.addEventListener("click", () => {
    let newItem = createToDoItem();

    selectedList.addItem(newItem);
    selectedList.displayItems(selectedList.items);

    const form = document.querySelector(".todo-form");
    const toDoArea = document.querySelector(".app-body");
    toDoArea.removeChild(form);
    saveToLocalStorage(toDoLists);
  });
});

//Event Listener for the "Add New Project" Button.
addProject.addEventListener("click", () => {
  Display.projectForm();

  const submit = document.querySelector(".form-submit");
  const form = document.querySelector(".todo-form");
  const toDoArea = document.querySelector(".app-body");

  //Takes user inputs and create a new List Object with the name provided by the user.
  //Displays list to side bar and saves the list to the user's local storage.

  submit.addEventListener("click", () => {
    const projectName = document.querySelector("#name-input");
    let newList = new List(projectName.value);
    toDoArea.removeChild(form);
    toDoLists.push(newList);
    newList.displayLists(toDoLists);
    saveToLocalStorage(toDoLists);
  });
});

//Function that takes an array and saves the information to local storage.
function saveToLocalStorage(lists) {
  localStorage.clear();
  localStorage.setItem("Lists", JSON.stringify(lists));
}

export { saveToLocalStorage, toDoLists };
