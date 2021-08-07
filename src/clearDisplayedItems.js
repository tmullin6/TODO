function clearDisplayedItems(list) {
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
}

export default clearDisplayedItems;