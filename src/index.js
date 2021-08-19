import './style.css';
import './modules/checkbox';

const list = document.querySelector('.todo-list');

let myList = [];

if (localStorage.myList !== undefined) {
  myList = JSON.parse(localStorage.myList);
}

function todoTasks() {
  myList.forEach((todo) => {
    const checkClass = (todo.completed) ? 'checked' : '';
    list.innerHTML += `
    <li class="todos" data-index="${todo.index}">
      <input class="todo-check" type="checkbox" ${checkClass} name="checkbox" "value="${todo.index}">
      <input class="todo-description" type="text" value="${todo.description}">
      <span class="material-icons btn-icon drag-icon">drag_indicator</span>
    </li>
    `;
  });
}

const addTask = () => {
  const task = document.getElementById('task');
  const addTask = document.getElementById('add-task');
  addTask.addEventListener('click', () => {
    const description = task.value;
    const index = myList.length;
    myList.push({
      description,
      completed: false,
      index,
    });
    list.innerHTML = '';
    todoTasks();
    localStorage.myList = JSON.stringify(myList);
    task.value = '';
  });
};

window.addEventListener('load', () => {
  todoTasks();
  addTask();

  const todoAll = document.querySelectorAll('.todos');

  myList.forEach((todo, index) => {
    if (todo.completed === true) {
      todoAll[index + 1].classList.add('completed-task');
      //index.checkbox.checked === true;
    }
    if (todo.completed === false) {
      todoAll[index + 1].classList.remove('completed-task');
      //index.checkbox.checked === false;
    }
  });
});