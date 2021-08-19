import './style.css';
import './modules/checkbox';

const list = document.querySelector('.todo-list');

let myList = [
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

if (localStorage.myList !== undefined) {
  myList = JSON.parse(localStorage.myList);
}

const todoTasks = () => {
  myList.forEach((todo) => {
    const checkClass = (todo.completed) ? 'checked' : '';
    list.innerHTML += `
    <li class="todos" data-index="${todo.index}">
      <input class="todo-check" type="checkbox" ${checkClass} name="checkbox" "value="${todo.index}">
      <input class="todo-description" type="text" value="${todo.description}">
      <button class="todo-delete material-icons btn-icon drag-icon">click</button>
    </li>
    `;
  });
  localStorage.myList = JSON.stringify(myList);
};

// ADD TODO

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

// DELETE TODO

function removeTodos(todo) {
  const todoIndex = myList.findIndex((item) => item.description === todo.children[1].value);
  myList.splice(todoIndex, 1);
  todo.remove();
  localStorage.setItem('myList', JSON.stringify(myList));
}

list.addEventListener('click', (e) => {
  const item = e.target;
  if (item.classList.contains('todo-delete')) {
    const item2 = item.parentElement;
    removeTodos(item2);
  }
});

// DELETE ALL

const deleteAll = document.getElementById('delete-btn');

deleteAll.addEventListener('click', (e) => {
  const item = e.target;
  if (item.classList.contains('btn-clear-todos')) {
    myList = [];
    list.innerHTML = '';
    localStorage.setItem('myList', JSON.stringify(myList));
  }
});

// UPDATE TODOS REMAINING

window.addEventListener('load', () => {
  todoTasks();
  addTask();

  const todoAll = document.querySelectorAll('.todos');

  myList.forEach((todo, index) => {
    if (todo.completed === true) {
      todoAll[index + 1].classList.add('completed-task');
    }
    if (todo.completed === false) {
      todoAll[index + 1].classList.remove('completed-task');
    }
  });
});