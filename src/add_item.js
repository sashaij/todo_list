
const newListForm  = document.querySelector('.new-list');
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
    return {
        showTasks () {
            tasks.innerHTML = `
            <div id="tasks-header">
            <h2 id="list-title">One</h2>
            <p id="task-count">2 tasks remaining</p>
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
        },
        populateTasks(){
            for(let i = 0; i<=listButtons.length; i++) {
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
}
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
export { createNewList, createNewTask, makeNewList, makeNewTask, displayTasks, showHTML };



