import './style.css';
import './modules/checkbox';

const list = document.querySelector('.todo-list');

let myList = [
  // {
  //   description: 'wash car',
  //   completed: false,
  //   index: 1,
  // },
  // {
  //   description: 'homework',
  //   completed: false,
  //   index: 2,
  // },
  // {
  //   description: 'gym',
  //   completed: false,
  //   index: 3,
  // },
  // {
  //   description: 'study rails',
  //   completed: false,
  //   index: 4,
  // },
];

if (localStorage.myList !== undefined) {
  myList = JSON.parse(localStorage.myList);
}

function todoTasks() {
  myList.forEach((todo) => {
    list.innerHTML += `
    <li class="todos" data-index="${todo.index}">
      <input id="check" class="todo-check" type="checkbox" name="checkbox" value="${todo.index}">
      <input id="description" class="todo-description" type="text" value="${todo.description}">
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
});