import { saveToLocalStorage, toDoLists } from "./index.js";

//List class for all user created To-Do Lists
class List {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.isDisplayed = false;
    this.isListed = false;
  }

  displayLists(listArr) {
    for (let i = 0; i < listArr.length; i++) {
      if (!listArr[i].isListed) {
        const projectList = document.querySelector(".project-list");
        const projectCard = document.createElement("div");
        const projectName = document.createElement("div");
        const remove = document.createElement("button");

        projectCard.classList.add("project-card");

        projectName.classList.add("project-name");
        remove.classList.add("remove-list");
        projectName.textContent = listArr[i].name;
        remove.textContent = "Delete";

        projectCard.appendChild(projectName);
        projectList.appendChild(projectCard);

        if (i == 0) {
          projectCard.classList.add("project-selected");
        }

        if (i > 0) {
          projectCard.addEventListener("mouseenter", () => {
            projectCard.appendChild(remove);
          });

          projectCard.addEventListener("mouseleave", () => {
            projectCard.removeChild(remove);
          });
        }

        projectName.addEventListener("click", () => {
          const cardList = document.querySelector(".card-list");
          const projects = Array.from(
            document.querySelectorAll(".project-card")
          );

          while (cardList.firstChild) {
            cardList.removeChild(cardList.lastChild);
          }

          listArr.forEach((list) => (list.isDisplayed = false));

          for (let k = 0; k < projects.length; k++) {
            projects[k].classList.remove("project-selected");
          }

          projectCard.classList.add("project-selected");

          listArr[i].isDisplayed = true;

          listArr[i].displayItems(listArr[i].items);
        });

        remove.addEventListener("click", () => {
          let choice = confirm(
            `Are you sure you want to delete the following list: \n ${listArr[i].name}`
          );

          if (choice == true) {
            const cardList = document.querySelector(".card-list");

            while (cardList.firstChild) {
              cardList.removeChild(cardList.lastChild);
            }

            projectList.removeChild(projectCard);
            this.removeItem(listArr[i], listArr);
            this.displayLists(listArr);
            saveToLocalStorage(listArr);
            location.reload();
          } else {
            return;
          }
        });
      }

      listArr[i].isListed = true;
    }
  }

  addItem(item) {
    this.items.push(item);
  }

  displayItems(list) {
    const cardList = document.querySelector(".card-list");
    list.forEach((item) => (item.listed = false));

    while (cardList.firstChild) {
      cardList.removeChild(cardList.lastChild);
    }

    for (let i = 0; i < list.length; i++) {
      if (!list[i].listed) {
        const card = document.createElement("div");
        let cardName = document.createElement("div");
        let cardDesc = document.createElement("div");
        let cardDueDate = document.createElement("div");
        let cardCreatedDate = document.createElement("div");

        if (list[i].isComplete == false) {
          card.classList.add("todo-card");
        } else {
          card.classList.add("completed");
        }

        cardName.textContent = list[i].name;
        cardDesc.textContent = list[i].desc;
        cardDueDate.textContent = `Due by: ${list[i].dueDate}`;
        cardCreatedDate.textContent = `Created: ${list[i].createdDate}`;

        card.appendChild(cardName);
        card.appendChild(cardDesc);
        card.appendChild(cardDueDate);
        card.appendChild(cardCreatedDate);

        cardList.appendChild(card);

        card.addEventListener("mouseenter", () => {
          let buttonDiv = document.createElement("div");
          const complete = document.createElement("button");
          const remove = document.createElement("button");

          buttonDiv.classList.add("card-buttons");
          complete.classList.add("complete");
          remove.classList.add("remove");

          complete.textContent = "Complete";
          remove.textContent = "Delete";

          if (list[i].isComplete == false) {
            buttonDiv.appendChild(complete);
          }

          buttonDiv.appendChild(remove);
          card.appendChild(buttonDiv);

          complete.addEventListener("click", () => {
            list[i].isComplete = true;
            card.classList.remove("todo-card");
            card.classList.add("completed");
            saveToLocalStorage(toDoLists);
          });

          remove.addEventListener("click", () => {
            let choice = confirm(
              `Do you want to delete the following item: \n\n ${list[i].name} \n ${list[i].desc}`
            );
            if (choice == true) {
              cardList.removeChild(card);
              this.removeItem(list[i], list);
              this.displayItems(list);
              saveToLocalStorage(toDoLists);
            } else {
              return;
            }
          });
        });

        card.addEventListener("mouseleave", () => {
          const buttonDiv = document.querySelector(".card-buttons");
          card.removeChild(buttonDiv);
        });
      }

      list[i].listed = true;
    }
  }

  removeItem(item, list) {
    let index = list.indexOf(item);
    list.splice(index, 1);
    return list;
  }
}

export default List;
