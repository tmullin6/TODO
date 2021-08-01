const ProjectList = (name, items,displayed)=>{
    displayed = false;
    items = [];
    
    function populateList(item) {
       
        this.items.push(item);

        return items;
    }
  

    return {name, items, displayed, populateList}
};

export default ProjectList;