// function ChangeStatus(element, elementHTML) {
//   const myList = JSON.parse(localStorage.getItem('myList'));

//   for (let id = 0; id < myList.length; id += 1) {
//     const tasks = myList[id];
//     if (tasks.index === element.index) {
//       const checked = elementHTML.checked;

//       if (checked === true) {
//         checked.setAttribute('completed', true)
//         checked.add.classList('check');
//         tasks.completed = true;
//       } else {
//         checked.setAttribute('completed', false);
//         checked.remove.classList('check');
//         tasks.completed = false;
//       }

//       localStorage.setItem('myList', JSON.stringify(myList));
//     }
//   }
// }

// function AddChangeStatus(element, elementHTML) {
//   elementHTML.addEventListener('change', () => ChangeStatus(element, elementHTML));
// }

// // eslint-disable-next-line
// export { AddChangeStatus };