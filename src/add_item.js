
const newListForm  = document.querySelector('.new-list');
const listsList = document.getElementById('lists');


const addNewList = function () {

    let listFormInput = newListForm.value;
    let newTaskListItem = document.createElement('li');
    newTaskListItem.textContent = listFormInput;
    listsList.appendChild(newTaskListItem);
    newListForm.value = '';

}

export default addNewList;
