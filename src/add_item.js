
const newListForm  = document.querySelector('.new-list');
const listsList = document.getElementById('lists');
const newTaskForm = document.querySelector('.new-task');
const taskList = document.getElementById('tasks-list');


const addNewList = function () {

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

export { addNewList, addNewTask };



