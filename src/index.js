import List from './List.js';
import Display from './displayController.js';
import createToDoItem from './createToDoItem.js';
import './styles.less';

//Render Web App Layout
Display.header();
Display.appBody();

//Create array of To-Do List Items and Projects

let toDoLists = [];
let selectedList;
//:)

if (localStorage.length > 0) {

    toDoLists= JSON.parse(localStorage.getItem("Lists"));

    for (let i=0;i<toDoLists.length;i++){

    toDoLists[i].isListed=false;
    toDoLists[0].displayLists(toDoLists);
    toDoLists[0].isDisplayed = true;
    toDoLists[0].displayItems(toDoLists[0].items);
    console.log(toDoLists);
    }
} 
else {
    let defaultList = new List('Default');
    defaultList.isDisplayed = true;
    toDoLists.push(defaultList);
    defaultList.displayLists(toDoLists);
    console.log(toDoLists);
}
    



//Event Listener that creates the pop up form to enter a new item to the to do list
const addItem = document.querySelector("#add-item");
const addProject = document.querySelector(".add-project");


addItem.addEventListener('click', ()=>{
   
    Display.toDoForm();
    const submit = document.querySelector('.form-submit');


    for (let i =0;i<toDoLists.length;i++){
        
        if(toDoLists[i].isDisplayed==true){

            selectedList = toDoLists[i];
            console.log(selectedList);
        };
    };

   
    //Takes the information added to the form and creates a new ToDo object and adds it to the array of To-Do Items
    submit.addEventListener('click',()=>{

        let newItem = createToDoItem();
        selectedList.addItem(newItem);
        selectedList.displayItems(selectedList.items);

        const form = document.querySelector(".todo-form");
        const toDoArea = document.querySelector(".app-body");
        toDoArea.removeChild(form); 
        saveToLocalStorage(toDoLists);
  
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
        saveToLocalStorage(toDoLists);
        
    });
});

function saveToLocalStorage(lists) {
    localStorage.clear();
    localStorage.setItem("Lists",JSON.stringify(lists));
};

export default saveToLocalStorage;