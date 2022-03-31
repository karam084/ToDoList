import listItem from '../listItem.js';
import todoItems from './task.js';

const deleteTask = function () {
  todoItems.listItem = this.parentNode;
  const ul = todoItems.listItem.parentNode;
  ul.removeChild(todoItems.listItem);
};

export default deleteTask;
