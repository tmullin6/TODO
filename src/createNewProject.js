function createProjectList() {
    const nameInput = document.querySelector("#name-input");

    let name = nameInput.value;
    let newList = ProjectList(name);

    return newList;

};


const ProjectList = (name, items, displayed)=>{
    displayed = false;
    items = [];

    function populateList(arr) {
       
        arr.forEach(item =>items.push(item));

        return items
    }
  

    return {name, items, displayed, populateList}
};

export {createProjectList, ProjectList}