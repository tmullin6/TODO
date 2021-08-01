import ProjectList from "./ProjectList.js";

function createProjectList() {
    const nameInput = document.querySelector("#name-input");

    let name = nameInput.value;
    let newList = ProjectList(name);

    return newList;

};

export default createProjectList;
