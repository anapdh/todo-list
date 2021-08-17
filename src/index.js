import _ from 'lodash';
import './style.css';

const todoList = document.querySelector('.todo-list');

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
    description: 'English class',
    completed: false,
    index: 3,
  },
];

function todoTasks() {
  myList.forEach((todo) => {
    const newTask = `
    <li class="todo-item item" data-index="${todo.index}">
      <input class="todo-checkbox" type="checkbox" value="${todo.index}">
      <input class="todo-text" type="text" value="${todo.description}">
    </li>
    `;

    todoList.innerHTML += newTask;
  });
}

window.addEventListener('load', () => todoTasks());