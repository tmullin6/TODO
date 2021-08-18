import {saveToLocalStorage,toDoLists} from "./index.js";

//List class for all user created To-Do Lists
class List {

    constructor(name){
        this.name=name;
        this.items=[];
        this.isDisplayed=false;
        this.isListed=false;
    }

    displayLists(listArr){

        for (let i=0; i<listArr.length; i++){

            if(!listArr[i].isListed) {

                const projectList= document.querySelector(".project-list");
                const projectCard = document.createElement("div");
                const projectName= document.createElement("div");
                const remove = document.createElement("button");

                projectCard.classList.add("project-card");
                projectName.classList.add("project-name");
                remove.classList.add("remove-list");
                projectName.textContent = listArr[i].name;
                remove.textContent="Delete";

                projectCard.appendChild(projectName);
                projectList.appendChild(projectCard);

                if(i>0){

                    projectCard.addEventListener("mouseenter",()=>{
                        projectCard.appendChild(remove);
                    });
                    
                    projectCard.addEventListener("mouseleave",()=>{
                        projectCard.removeChild(remove);
                    });

                };
                

                remove.addEventListener("click",()=>{
                    const cardList = document.querySelector(".card-list");

                    while(cardList.firstChild){
                        cardList.removeChild(cardList.lastChild);
                    };
                
                    projectList.removeChild(projectCard);
                    this.removeItem(listArr[i],listArr);
                    this.displayLists(listArr);
                    saveToLocalStorage(listArr);
                    console.log(listArr);
                });

                projectName.addEventListener("click",()=>{
                    const cardList = document.querySelector(".card-list");

                    while(cardList.firstChild){
                        cardList.removeChild(cardList.lastChild);
                    };

                    listArr.forEach( list => list.isDisplayed=false);
                         
                    projectCard.classList.add("project-selected");

                    this.isDisplayed=true;
                    
                    this.displayItems(this.items);
                }); 
            }

            listArr[i].isListed=true;
        }
    }


    addItem(item){
        this.items.push(item);
    };


    displayItems(list) {

        const cardList= document.querySelector(".card-list");
        list.forEach(item => item.listed=false);

        while(cardList.firstChild){
            cardList.removeChild(cardList.lastChild);
        }

        for (let i =0; i<list.length;i++){

            if (!list[i].listed) {

                const card = document.createElement('div');
                let cardName = document.createElement("div");
                let cardDesc = document.createElement("div");
                let cardDueDate = document.createElement("div");
                let cardCreatedDate = document.createElement("div");
                card.classList.add("todo-card");

                cardName.textContent=list[i].name;
                cardDesc.textContent=list[i].desc;
                cardDueDate.textContent=`Due by: ${list[i].dueDate}`;
                cardCreatedDate.textContent=`Created: ${list[i].createdDate}`;
    
                card.appendChild(cardName);
                card.appendChild(cardDesc);
                card.appendChild(cardDueDate);
                card.appendChild(cardCreatedDate);

                cardList.appendChild(card);

                card.addEventListener("mouseenter",()=>{

                    let buttonDiv = document.createElement("div");
                    const complete = document.createElement("button");
                    const remove = document.createElement("button");
        
                    buttonDiv.classList.add("card-buttons");
                    complete.classList.add("complete");
                    remove.classList.add("remove")
                    complete.textContent="Complete";
                    remove.textContent="Delete";
                    buttonDiv.appendChild(complete);
                    buttonDiv.appendChild(remove);
                    card.appendChild(buttonDiv);

                    complete.addEventListener("click", ()=>{
                  

                        if(complete.textContent="complete") {
                            complete.textContent="In Progress";
                            card.classList.remove("todo-card");
                            card.classList.add("completed");
                        }
                        else if( complete.textContent="In Progress") {
                            complete.textContent="complete";
                            card.classList.add("todo-card");
                            card.classList.remove("completed");
                        }
                    });

                    remove.addEventListener("click",()=>{
                        cardList.removeChild(card);
                        this.removeItem(list[i],list);
                        this.displayItems(list);
                        saveToLocalStorage(toDoLists);
                    })
                });
                
                card.addEventListener("mouseleave", ()=>{
                    const buttonDiv = document.querySelector(".card-buttons");
                    card.removeChild(buttonDiv);
                });  
            };

            list[i].listed = true;
        };

    };
    
    removeItem(item,list) {
    
        let index = list.indexOf(item)
        if(list.length===1){
            list.pop()
        }
        else{
            list.splice(index,1);
        }
        return list;
    };
}

export default List