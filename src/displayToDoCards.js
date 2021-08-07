
//Function that create list of To Do Items from an array of To Do Item Objects
function displayToDoCards (arr) {

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

                /*remove.addEventListener("click",()=>{
                    cardList.removeChild(card);
                
                    if(arr.length==1) {
                        arr.pop(); 
                        console.log(arr);
                    } 
                    else {
                        arr.slice(i,1);
                        console.log(arr);
                    }

                });*/

            });

            
        };

        arr[i].listed = true;
    };

};

export default displayToDoCards;