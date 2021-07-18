function createToDoCard (toDoItem) {

    const appArea = document.querySelector(".app-body");
    const card = document.createElement("div");
    const name = document.createElement("p");
    const desc = document.createElement("p");
    const dueDate = document.createElement("p");
    const createdDate = document.createElement("p");

    card.classList.add("todo-card");

    name.textContent=toDoItem.name;
    desc.textContent=toDoItem.desc;
    dueDate.textContent=toDoItem.dueDate;
    createdDate.textContent=toDoItem.createdDate;

    appArea.appendChild(card);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(dueDate);
    card.appendChild(createdDate);
    

}

export default createToDoCard;