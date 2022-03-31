import listItem from '../listItem.js';
import todoItems from './task.js';

const deleteTask = function () {
  todoItems.listItem = this.parentNode;
  const ul = todoItems.listItem.parentNode;
  ul.removeChild(todoItems.listItem);
  localStorage.setItem('deleteTask', JSON.stringify(listItem.todoItems));
};
if (JSON.parse(localStorage.getItem('todoItems')) != null) {
  listItem.todoItems = JSON.parse(localStorage.getItem('deleteTask'));
}

export default deleteTask;
