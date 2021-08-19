const checkTodos = (todo) => {
  const todos = JSON.parse(localStorage.getItem('myList'));
  const todoIndex = todos.findIndex((item) => item.description === todo.children[1].value);
  todos[todoIndex].completed = !todos[todoIndex].completed;
  localStorage.setItem('myList', JSON.stringify(todos));
};

const list = document.querySelector('.todo-list');

list.addEventListener('change', (e) => {
  const item = e.target;
  if (item.classList[0] === 'todo-check') {
    const item2 = item.parentElement;
    item2.classList.toggle('completed-task');
    checkTodos(item2);
  }
});