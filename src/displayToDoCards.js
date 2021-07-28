import saveToLocalStorage from "./index.js";

//Function that create list of To Do Items from an array of To Do Item Objects
function createToDoCards (arr) {

    const cardList= document.querySelector(".card-list");

   
    for (let i =0; i<arr.length;i++){

        if (!arr[i].listed) {
            const card = document.createElement('div');
            let cardName = document.createElement("div");
            let cardDesc = document.createElement("div");
            let cardDueDate = document.createElement("div");
            let cardCreatedDate = document.createElement("div");
            card.classList.add("todo-card");

            cardName.textContent=arr[i].name;
            cardDesc.textContent=arr[i].desc;
            cardDueDate.textContent=`Due by: ${arr[i].dueDate}`;
            cardCreatedDate.textContent=`Created: ${arr[i].createdDate}`;
    
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
                    card.classList.remove("todo-card");
                    card.classList.add("completed");
                });

                remove.addEventListener("click",()=>{
                    cardList.removeChild(card);
                
                    if (arr.length==1) {
                        arr.pop();
                        console.log(arr);
                    }

                    else {
                        arr.splice(i,1);
                        console.log(arr);
                    }

                    saveToLocalStorage(arr);
                });

            });

            card.addEventListener("mouseleave", ()=>{
                const buttonDiv = document.querySelector(".card-buttons");
                card.removeChild(buttonDiv);
            });
        };

        arr[i].listed = true;
    };

};

export default createToDoCards;