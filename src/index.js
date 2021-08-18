import './style.css';

const list = document.querySelector('.todo-list');

const myList = [
  {
    description: 'wash car',
    completed: false,
    index: 1,
  },
  {
    description: 'homework',
    completed: false,
    index: 2,
  },
  {
    description: 'gym',
    completed: false,
    index: 3,
  },
  {
    description: 'study rails',
    completed: false,
    index: 4,
  },
];

function todoTasks() {
  myList.forEach((todo) => {
    const newTask = `
    <li class="todos" data-index="${todo.index}">
      <input class="todo-check" type="checkbox" value="${todo.index}">
      <input class="todo-description" type="text" value="${todo.description}">
      <span class="material-icons btn-icon drag-icon">drag_indicator</span>
    </li>
    `;

    list.innerHTML += newTask;
  });
}

window.addEventListener('load', todoTasks);