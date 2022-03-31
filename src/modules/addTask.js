import {
  taskInput,
  createNewTaskElement,
  incompleteTasksHolder,
  bindTaskEvents,
  taskCompleted,
} from '../taskInput.js';
import todoItems from './task.js';

const listItem = todoItems;
const addTask = () => {
  const listItemName = taskInput.value || 'New Item';
  todoItems.listItem = createNewTaskElement(listItemName);
  incompleteTasksHolder.appendChild(todoItems.listItem);
  bindTaskEvents(todoItems.listItem, taskCompleted);
  taskInput.value = '';
};

export default addTask;
