

function createToDoCards (arr) {

    const appArea = document.querySelector(".app-body");
    const cardList=document.createElement("ul");
    cardList.classList.add("card-list");
    appArea.appendChild(cardList);

    for (let i =0; i<arr.length;i++){
        const card = document.createElement("li");
        const cardDiv = document.createElement('div');
        let cardName = document.createElement("div");
        let cardDesc = document.createElement("div");
        let cardDueDate = document.createElement("div");
        let cardCreatedDate = document.createElement("div");
        cardDiv.classList.add("todo-card");

        cardName.textContent=arr[i].name;
        cardDesc.textContent=arr[i].desc;
        cardDueDate.textContent=`Due by: ${arr[i].dueDate}`;
        cardCreatedDate.textContent=`Created: ${arr[i].createdDate}`;
    
        cardDiv.appendChild(cardName);
        cardDiv.appendChild(cardDesc);
        cardDiv.appendChild(cardDueDate);
        cardDiv.appendChild(cardCreatedDate);

        card.appendChild(cardDiv);
        cardList.appendChild(card);

        cardDiv.addEventListener("mouseenter",()=>{
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
            cardDiv.appendChild(buttonDiv);

            complete.addEventListener("click", ()=>{
                cardDiv.classList.add("completed");
            });

            remove.addEventListener("click",()=>{
                card.removeChild(cardDiv);
                cardList.removeChild(card);
                
                if (arr.length==1) {
                    arr.pop();
                    console.log(arr);
                    
                }
                else {
                arr.splice(i,1);
                console.log(arr);
                }
                
            });

        });

        cardDiv.addEventListener("mouseleave", ()=>{
            const buttonDiv = document.querySelector(".card-buttons");
            cardDiv.removeChild(buttonDiv);
        });
    };
};

export default createToDoCards;