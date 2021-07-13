import './styles.less';

renderHeader();

const appArea = document.createElement('div');
const sideBar = document.createElement('div');
const toDoArea = document.createElement('div');

appArea.classList.add("app-body");
sideBar.classList.add("side-bar");
toDoArea.classList.add("list-area");

sideBar.textContent = "List of projects and lists here";
toDoArea.textContent = "List of To Do Items here";

document.body.appendChild(appArea);
appArea.appendChild(sideBar);
appArea.appendChild(toDoArea);

function renderHeader (){

const header = document.createElement('div');
const title = document.createElement('div');
const git = document.createElement('div');

header.classList.add("header");
title.classList.add("head-text");
git.classList.add("git-text");

title.textContent="List-it";
git.textContent="Check out my github for more";

document.body.appendChild(header);
header.appendChild(title);
header.appendChild(git);

}