
/* const newListForm  = document.querySelector('.new-list');
const listsList = document.getElementById('lists');
const newTaskForm = document.querySelector('.new-task');
const taskList = document.getElementById('tasks-list');
const tasks = document.getElementById('tasks');


function makeNewList () {
    let newList = createNewList(newListForm.value);
    newList.addNewList();
}

function makeNewTask () {
    let newTask = createNewTask(newTaskForm.value);
    newTask.addNewTask();
}

function createNewList (listName) {
    return {
        listName: listName,
        getListName () {
            return listName;
        },
        addNewList(){
            let listFormInput = this.listName;
            let newTaskListItem = document.createElement('li');
            newTaskListItem.textContent = listFormInput;
            listsList.appendChild(newTaskListItem);
            newListForm.value = '';
        }
    }
}

function createNewTask (title) {
    return {
        title: title,
        addNewTask(){
            let taskFormInput = this.title;
            let taskContainer = document.createElement('div');
            let newTaskItem = document.createElement('input');
            let newTaskLabel = document.createElement('label');
            taskContainer.setAttribute('class', 'task');
            newTaskItem.setAttribute('type', 'checkbox');
            newTaskItem.setAttribute('id', `task-2`);
            newTaskLabel.setAttribute('for', `task-2`);
            newTaskLabel.textContent = ` ${taskFormInput}`;
            taskList.appendChild(taskContainer);
            taskContainer.appendChild(newTaskItem);
            taskContainer.appendChild(newTaskLabel);
            newTaskForm.value = '';
        }
    }
}

function displayTasks () {
    const listButtons = document.querySelectorAll('.list-button');
    const allTasks = document.querySelectorAll('.task');
    let taskCount;
    return {
        showTasks () {
            for (let i = 0; i <= allTasks.length; i++) {
                taskCount = i;
            }
            for(let i = 0; i<=listButtons.length; i++) {
            tasks.innerHTML = `
            <div id="tasks-header">
            <h2 id="list-title">${listButtons[i].innerHTML}</h2>
            <p id="task-count">${taskCount} tasks remaining</p>
        </div>
        <div id="tasks-body">
            <div id="tasks-list">
                <div class="task">
                    <input type="checkbox" id="task-1">
                    <label for="task-1">
                        Do one thing
                    </label>
                </div>
            </div>
            <div id="new-task-form">
                <form action="">
                    <input type="text" class="new-task" placeholder="new task" aria-label="new task">
                    <button id="new-task-button">+</button>
                </form>
            </div>
            <div id="delete-task">
                <button class="btn delete">
                    Hide completed tasks
                </button>
                <button class="btn delete">
                    Delete list
                </button>
            </div>
        </div>
            `
                listButtons[i].addEventListener('click', this.showTasks)
            }
        }
    }
}

function showHTML () {
    const listButtons = document.querySelectorAll('.list-button');

    for (let i = 0; i <= listButtons.length; i++) {
        function dispHTML () {
            let buttonsContent = listButtons[i].innerHTML;
            console.log(buttonsContent);
        }
        listButtons[i].addEventListener('click', dispHTML)
    }
} */
/* 
function displayTasks () {
    return {
        tasks.innerHTML = `
        <div id="tasks-header">
        <h2 id="list-title">One</h2>
        <p id="task-count">3 tasks remaining</p>
    </div>
    <div id="tasks-body">
        <div id="tasks-list">
            <div class="task">
                <input type="checkbox" id="task-1">
                <label for="task-1">
                    Do one thing
                </label>
            </div>
        </div>
        <div id="new-task-form">
            <form action="">
                <input type="text" class="new-task" placeholder="new task" aria-label="new task">
                <button id="new-task-button">+</button>
            </form>
        </div>
        <div id="delete-task">
            <button class="btn delete">
                Hide completed tasks
            </button>
            <button class="btn delete">
                Delete list
            </button>
        </div>
    </div>
        `
    }
} */
/* const addNewList = function () {

    let listFormInput = newListForm.value;
    let newTaskListItem = document.createElement('li');
    newTaskListItem.textContent = listFormInput;
    listsList.appendChild(newTaskListItem);
    newListForm.value = '';

}

const addNewTask = function () {
    let taskFormInput = newTaskForm.value;
    let taskContainer = document.createElement('div');
    let newTaskItem = document.createElement('input');
    let newTaskLabel = document.createElement('label');
    taskContainer.setAttribute('class', 'task');
    newTaskItem.setAttribute('type', 'checkbox');
    newTaskItem.setAttribute('id', `task-2`);
    newTaskLabel.setAttribute('for', `task-2`);
    newTaskLabel.textContent = ` ${taskFormInput}`;
    taskList.appendChild(taskContainer);
    taskContainer.appendChild(newTaskItem);
    taskContainer.appendChild(newTaskLabel);
    newTaskForm.value = '';
}
 */
/* export { createNewList, createNewTask, makeNewList, makeNewTask, displayTasks, showHTML };
 */

import { newTask } from "./tasks";
import preventSubmit from "./preventSubmit";
/* 
function lists (list) {
    let lists = [

    ]
    const getLists = () => lists;
    const addList = () => {
        lists.push(list);
    }
    const renderList = () => {

    }

    return{ getLists }
}

function list (title) {
    let title = title;
    let taskQuantity = 0;
    let task;
    let tasks = [

    ]
    const createNewTask = () => {
        task = newTask('First Task','12-Mar-2025', 'high', 0, 'First important task');
        }
    const addNewTask = () => {
        tasks.push(task);
    }
    const addQuantity = () => taskQuantity++;

    const getTasks = () => tasks;

    return { addNewTask, addQuantity, getTasks } 
} */

///

//class for item lists
export class List {
    constructor () {
        //add new list element when
        //"+" button is clicked
        const newListButton = document.getElementById('new-list-button');
        newListButton.addEventListener('click', preventSubmit);
        newListButton.addEventListener('click', this._createNewList.bind(this));
        newListButton.addEventListener('click', this._emptyListForm.bind(this));
    }

    
    
    tasks = [];
    
    _createNewList(){
        //form for title input
        const newListForm = document.querySelector('.new-list');
        //list title var
        let newListTitle; 
        const listsContainer = document.getElementById('lists');
        //value form the input form
        newListTitle = newListForm.value;
        const newListEl = document.createElement('li');
        const newListBtn = document.createElement('button');
        newListEl.setAttribute('class', 'list-item');
        newListBtn.setAttribute('class', 'list-button');
        newListBtn.innerHTML = `${newListTitle}`;
        newListEl.appendChild(newListBtn);
        listsContainer.appendChild(newListEl);
    }

    _emptyListForm () {
        const newListForm = document.querySelector('.new-list');
        newListForm.value = '';
    }


    _taskQuantity() {

    }
}






