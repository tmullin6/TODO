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
                projectCard.appendChild(remove);
                projectList.appendChild(projectCard);

                remove.addEventListener("click",()=>{
                    projectList.removeChild(projectCard);
                    this.removeItem(listArr[i],listArr);
                    console.log(listArr);
                });

                projectCard.addEventListener("click",()=>{
                    for (let k=0;k<listArr.length; k++){
                        listArr[k].isDisplayed=false;
                    }
                    listArr[i].setActiveList();
                    console.log(listArr);
                }); 


            }
            listArr[i].isListed=true;
        }

    }

    setActiveList(){
            this.isDisplayed=true; 
    }

    addItem(item){
        this.items.push(item);
        console.log(this.items);
    }


    displayItems(list) {

        const cardList= document.querySelector(".card-list");

   
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
                        console.log(this.items);
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
    

    //Delete Item from List

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
    
    //Delete 
    
    removeList(card) {
        const projectList = document.querySelector(".project-list");
        projectList.removeChild(card);
        
        this.displayed=false;

    }

}

export default List