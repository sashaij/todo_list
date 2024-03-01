function removeTasks () {
    const taskHeader = document.getElementById('tasks-header');
    const taskBody = document.getElementById('tasks-body');
    const listButtons = document.querySelectorAll('.list-button');

    function contentRemover () {
        taskHeader.closest('div').remove();
        taskBody.closest('div').remove();
    }

    for (let i=0; i<=listButtons.length; i++) {
        listButtons[i].addEventListener('click', contentRemover);
    }
}

export { removeTasks }