import isStorageAvailable from './isStorageAvailable.js';
import newFunction from './newFunction.js';

export default class TodoList {
  constructor(wrapper, storageName = 'todos') {
    this.wrapper = wrapper;
    this.storageName = storageName;
    this.isStorageAvailable = isStorageAvailable('localStorage');
    this.init();
  }

  init() {
    if (this.isStorageAvailable) {
      const storage = window.localStorage.getItem(this.storageName);
      this.todos = JSON.parse(storage) || [];
      this.todos = this.sortList();
      window.localStorage.setItem(this.storageName, JSON.stringify(this.todos));
    } else {
      this.todos = [];
    }

    this.addAllToPage();
  }

  updateStorage() {
    if (this.isStorageAvailable) {
      window.localStorage.setItem(this.storageName, JSON.stringify(this.todos));
    }
  }

  sortList() {
    let sortedTodos = this.todos.sort((a, b) => a.index - b.index);
    sortedTodos = sortedTodos.map((todo, index) => ({
      index: index + 1,
      description: todo.description,
      completed: todo.completed,
    }));
    return sortedTodos;
  }

  addAllToPage() {
    this.todos.forEach((todo) => {
      this.addToPage(todo);
    });
  }

  removeAllFromPage() {
    this.wrapper.innerHTML = '';
  }

  addToPage(todo) {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.setAttribute('id', 'todo-'.concat(todo.index));

    const completionIcon = document.createElement('button');
    completionIcon.setAttribute('type', 'button');
    completionIcon.classList.add('completionIcon', 'icon');
    completionIcon.innerHTML = `
    <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`;

    this.newMethod(completionIcon, li);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'description');
    description.readOnly = true;
    description.setAttribute('value', todo.description);
    description.classList.add('description');

    description.addEventListener('focusin', () => {
      description.readOnly = false;
      li.classList.add('active');
    });

    newFunction(description, li);

    const actionIcon = document.createElement('div');
    actionIcon.classList.add('actionIcon', 'icon');

    const dragIcon = document.createElement('button');
    dragIcon.setAttribute('type', 'button');
    dragIcon.innerHTML = `
    <svg
      class="icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
    `;

    this.newMethod2(
      li,
      actionIcon,
      dragIcon,
      todo,
      completionIcon,
      description,
    );
  }

  newMethod2(li, actionIcon, dragIcon, todo, completionIcon, description) {
    this.newMethod3(
      li,
      actionIcon,
      dragIcon,
      todo,
      completionIcon,
      description,
    );
  }

  newMethod3(li, actionIcon, dragIcon, todo, completionIcon, description) {
    this.newMethod4(
      li,
      actionIcon,
      dragIcon,
      todo,
      completionIcon,
      description,
    );
  }

  newMethod4(li, actionIcon, dragIcon, todo, completionIcon, description) {
    this.newMethod5(
      li,
      actionIcon,
      dragIcon,
      todo,
      completionIcon,
      description,
    );
  }

  newMethod5(li, actionIcon, dragIcon, todo, completionIcon, description) {
    const deleteIcon = document.createElement('button');
    deleteIcon.setAttribute('type', 'button');
    deleteIcon.classList.add('remove');
    deleteIcon.innerHTML = `
    <svg
      class="icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      ></path>
    </svg>
    `;
    this.newMethod1(
      deleteIcon,
      li,
      actionIcon,
      dragIcon,
      todo,
      completionIcon,
      description,
    );
  }

  newMethod1(
    deleteIcon,
    li,
    actionIcon,
    dragIcon,
    todo,
    completionIcon,
    description,
  ) {
    deleteIcon.addEventListener('click', () => this.removeItem(li));

    actionIcon.appendChild(dragIcon);
    actionIcon.appendChild(deleteIcon);

    if (todo.completed) {
      li.classList.add('completed');
    }

    li.appendChild(completionIcon);
    li.appendChild(description);
    li.appendChild(actionIcon);
    this.wrapper.appendChild(li);
  }

  newMethod(completionIcon, li) {
    completionIcon.addEventListener('click', (event) => {
      event.preventDefault();
      this.toggleCompleteStatus(li);
    });
  }

  addNewItem(description) {
    const index = this.todos.length;
    const completed = false;

    const newTodo = {
      index: index + 1,
      description,
      completed,
    };

    this.todos.push(newTodo);
    if (this.isStorageAvailable) {
      window.localStorage.setItem(this.storageName, JSON.stringify(this.todos));
    }

    this.addToPage(newTodo);
  }

  refreshTodosOnPage() {
    this.updateStorage();
    this.removeAllFromPage();
    this.addAllToPage();
  }

  removeItem(element) {
    const todoId = Number(element.id.match(/\d+$/));
    this.todos = this.todos.filter((todo) => todo.index !== todoId);
    this.todos = this.sortList();
    this.refreshTodosOnPage();
  }

  removeAllCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.todos = this.sortList();
    this.refreshTodosOnPage();
  }

  toggleCompleteStatus(element) {
    element.classList.toggle('completed');

    const todoIndex = Number(element.id.match(/\d+$/));
    this.todos[todoIndex].completed = element.classList.contains('completed');
    this.updateStorage();
  }
}
