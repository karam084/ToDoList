import todoItems from './modules/task.js';
import deleteTask from './modules/deleteTask.js';
import listItem from './listItem.js';

export const taskInput = document.getElementById('new-task');
export const addButton = document.getElementsByTagName('button')[0];
export const incompleteTasksHolder = document.getElementById('incomplete-tasks');
export const completedTasksHolder = document.getElementById('completed-tasks');

export const createNewTaskElement = (...taskString) => {
  for (let i = 0; i < listItem.length; i += 1) {
    todoItems.listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const editInput = document.createElement('input');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    checkBox.type = 'checkbox';
    editInput.type = 'text';
    editButton.innerText = 'Edit';
    editButton.className = 'edit';
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    label.innerText = taskString;

    todoItems.listItem.appendChild(checkBox);
    todoItems.listItem.appendChild(label);
    todoItems.listItem.appendChild(editInput);
    todoItems.listItem.appendChild(editButton);
    todoItems.listItem.appendChild(deleteButton);
  }
  return todoItems.listItem;
};
function newFunction() {
  return function () {
    todoItems.listItem = this.parentNode;
    const editInput = todoItems.listItem.querySelector('input[type=text');
    const label = todoItems.listItem.querySelector('label');
    const button = todoItems.listItem.getElementsByTagName('button')[0];

    const containsClass = todoItems.listItem.classList.contains('editMode');
    if (containsClass) {
      label.innerText = editInput.value;
      button.innerText = 'Edit';
    } else {
      editInput.value = label.innerText;
      button.innerText = 'Save';
    }
    todoItems.listItem.classList.toggle('editMode');
  };
}
localStorage.setItem('containsClass', JSON.stringify(listItem.todoItems));

if (JSON.parse(localStorage.getItem('todoItems')) != null) {
  listItem.todoItems = JSON.parse(localStorage.getItem('containsClass'));
}
const editTask = newFunction();
export const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  const checkBox = taskListItem.querySelector('input[type=checkbox]');
  const editButton = taskListItem.querySelector('button.edit');
  const deleteButton = taskListItem.querySelector('button.delete');
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
  localStorage.setItem('editButton', JSON.stringify(todoItems));
};

export const taskIncomplete = () => {
  todoItems.listItem = this.parentNode;
  incompleteTasksHolder.appendChild(todoItems.listItem);
  bindTaskEvents(todoItems.listItem, taskIncomplete);
};
export const taskCompleted = function () {
  todoItems.listItem = this.parentNode;
  completedTasksHolder.appendChild(todoItems.listItem);
  bindTaskEvents(todoItems.listItem, taskCompleted);
};
