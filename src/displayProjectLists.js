import displayToDoCards from "./displayToDoCards.js";

function displayProjects (arr) {

    const projectList = document.querySelector(".project-list");

    for (let i=0; i<arr.length; i++){

        if (!arr[i].displayed) {
            const projectCard = document.createElement("div");
            const projectName= document.createElement("div");
            const remove = document.createElement("button");

            projectCard.classList.add("project-card");
            remove.classList.add("remove-list");
            projectName.textContent=arr[i].name;
            remove.textContent="Delete";

            projectCard.appendChild(projectName);
            projectCard.appendChild(remove);
            projectList.appendChild(projectCard);

            projectCard.addEventListener("click",()=>{
                const cardList = document.querySelector(".card-list");

                while(cardList.firstChild){
                    cardList.removeChild(cardList.lastChild);
                }
                console.log(arr[i].items);
                arr[i].items.forEach(item=>item.listed=false);
                
                displayToDoCards(arr[i].items);
                
            });

            remove.addEventListener("click",()=>{

                projectList.removeChild(projectCard);
                
                if (arr.length==1) {
                    arr.pop();
                    console.log(arr);
                }

                else {
                    arr.splice(i,1);
                    console.log(arr);
                }
            });
        };
        arr[i].displayed=true;
    }
};

export default displayProjects;