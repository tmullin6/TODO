class List {

    constructor(name){
        this.name=name;
        this.items=[];
        this.isDisplayed=false;
    }

    displayList(){

        const projectList= document.querySelector(".project-list");
        const projectCard = document.createElement("div");
        const projectName= document.createElement("div");
        const remove = document.createElement("button");

        projectCard.classList.add("project-card");
        projectName.classList.add("project-name");
        remove.classList.add("remove-list");
        projectName.textContent = this.name;
        remove.textContent="Delete";

        projectCard.appendChild(projectName);
        projectCard.appendChild(remove);
        projectList.appendChild(projectCard);
    }

    setActiveList(){
            this.isDisplayed=true;  
    }

    addItem(item){
        this.items.push(item);
        console.log(this.items);
    }

    //Delete Item from List

    removeItem(item) {
    
        let index = this.items.indexOf(item)
        if(this.items.length===1){
            this.items.pop()
        }
        else{
            this.items.splice(index,1);
        }

        return this.items;

    };
    
    //Delete 
    
    removeList(card) {
        const projectList = document.querySelector(".project-list");
        projectList.removeChild(card);
        
        this.displayed=false;

    }

}

export default List