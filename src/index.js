import './style.css';
import './style.scss';
import 'bootstrap';
import addTask from './modules/addTask.js';
import {
  addButton,
  incompleteTasksHolder,
  bindTaskEvents,
  taskCompleted,
  completedTasksHolder,
  taskIncomplete,
} from './taskInput.js';
import listItem from './listItem.js';
import todoItems from './modules/task';

addButton.addEventListener('click', addTask);

for (let i = 0; i < incompleteTasksHolder.children.length; i += 1) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (let i = 0; i < completedTasksHolder.children.length; i += 1) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

listItem();
todoItems();
