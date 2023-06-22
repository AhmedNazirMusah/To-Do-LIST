/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css';
// // import addTodo from './todo.js';

// // import {
// //   deletefun, input,
// // } from './delete.js';

// export default function Populate() {
//   const forms = document.querySelector('.todo-form');
//   forms.innerHTML = '';
//   const list = JSON.parse(localStorage.getItem('list')) || [];
//   list.forEach((item, id) => {
//     forms.innerHTML += `<div class="todo-form-group r-div" id="${id}">
//       <div class="i-div">
//       <label for="${id}" id="${id}">
//         <input id="${id}" type="checkbox" class="box">
//    <input id="${id}" type="text" readonly placeholder="${item.description}" class="place-input">
//       </label>
//       </div>
//       <i id="${id}" class="fa-solid fa-trash del" name="deleted"></i>
//       <i class="fa-solid fa-arrows-to-dot"></i>
//     </div>`;
//   });
// }

// Populate();

// // import Populate from './index.js';

// const todolist = JSON.parse(localStorage.getItem('list')) || [];
// export const input = document.querySelector('.todo-input');
// export const clear = document.querySelector('.submit');

// const deletefun = () => {
//   if (todolist[0] === null) return;
//   const edit = document.querySelectorAll('.place-input');
//   edit.forEach((space) => {
//     space.addEventListener('click', () => {
//       space.removeAttribute('readonly');
//     });
//   });
//   edit.forEach((trigger) => {
//     trigger.addEventListener('keyup', (e) => {
//       if (e.key === 'Enter' && trigger.value !== '') {
//         todolist[trigger.id].description = trigger.value;
//         localStorage.setItem('list', JSON.stringify(todolist));
//         Populate();
//       }
//     });
//   });
//   const checker = document.querySelectorAll('.box');
//   checker.forEach((boox) => {
//     boox.addEventListener('change', (e) => {
//       if (e.target.checked) {
//         todolist[boox.id].completed = true;
//         boox.parentElement.lastElementChild.classList.add('checked');
//       } else {
//         todolist[boox.id].completed = false;
//         boox.parentElement.lastElementChild.classList.remove('checked');
//       }
//       localStorage.setItem('list', JSON.stringify(todolist));
//     });
//   });

//   const deleteButtons = document.querySelectorAll('.del');
//   deleteButtons.forEach((deletebtn) => {
//     // Add event listener for deleting an item
//     deletebtn.addEventListener('click', () => {
//       todolist.splice(deletebtn.id, 1); // Remove the item from the array
//       localStorage.setItem('list', JSON.stringify(todolist));
//       Populate();
//     });
//   });
// };

// clear.addEventListener('click', () => {
//   const updated = todolist.filter((todo) => todo.completed === false);
//   localStorage.setItem('list', JSON.stringify(updated));
//   Populate();
// });

// export { deletefun, todolist };

// const addTodo = () => {
//   const task = {
//     description: input.value,
//     completed: false,
//   };
//   todolist.push(task);
//   localStorage.setItem('list', JSON.stringify(todolist));
//   input.value = '';
//   Populate();
// };

// input.addEventListener('keyup', (e) => {
//   const userInput = input.value;
//   if (e.key === 'Enter' && userInput) {
//     if (input.value !== '') {
//       addTodo();
//     }
//   }
// });

// deletefun();

// const todolist = JSON.parse(localStorage.getItem('list')) || [];
// const input = document.querySelector('.todo-input');
// const clear = document.querySelector('.submit');

// const attachEventListeners= () => {
//   const edit = document.querySelectorAll('.place-input');
//   edit.forEach((space) => {
//     // Add event listener for editing
//     space.addEventListener('click', () => {
//       space.removeAttribute('readonly');
//     });
//   });

// export default function Populate() {
//   const attachEventListeners = () => {
//     const edit = document.querySelectorAll('.place-input');
//     edit.forEach((space) => {
//       // Add event listener for editing
//       space.addEventListener('click', () => {
//         space.removeAttribute('readonly');
//       });
//     });

//     const forms = document.querySelector('.todo-form');
//     forms.innerHTML = '';
//     const list = JSON.parse(localStorage.getItem('list')) || [];
//     console.log(list);
//     list.forEach((item, id) => {
//       forms.innerHTML += `<div class="todo-form-group r-div" id="${id}">
//           <div class="i-div">
//           <label for="${id}" id="${id}">
//             <input id="${id}" type="checkbox" class="box">
//    <input id="${id}"type="text" readonly placeholder="${item.description}" class="place-input">
//           </label>
//           </div>
//           <i id="${id}" class="fa-solid fa-trash del" name="deleted"></i>
//           <i class="fa-solid fa-arrows-to-dot"></i>
//         </div>`;
//     });

//     attachEventListeners(); // Attach event listeners after populating the list
//   };

//   function deletefun() {
//     if (todolist[0] === null) return;
//     const edit = document.querySelectorAll('.place-input');
//     edit.forEach((space) => {
//       space.addEventListener('click', () => {
//         space.removeAttribute('readonly');
//       });
//     });
//     edit.forEach((trigger) => {
//       trigger.addEventListener('keyup', (e) => {
//         if (e.key === 'Enter' && trigger.value !== '') {
//           todolist[trigger.id].description = trigger.value;
//           localStorage.setItem('list', JSON.stringify(todolist));
//           Populate();
//         }
//       });
//     });
//     const checker = document.querySelectorAll('.box');
//     checker.forEach((boox) => {
//       boox.addEventListener('change', (e) => {
//         if (e.target.checked) {
//           todolist[boox.id].completed = true;
//           boox.parentElement.lastElementChild.classList.add('checked');
//         } else {
//           todolist[boox.id].completed = false;
//           boox.parentElement.lastElementChild.classList.remove('checked');
//         }
//         localStorage.setItem('list', JSON.stringify(todolist));
//       });
//     });

//     const singledelete = document.querySelectorAll('.del');
//     const itemz = [...singledelete];
//     itemz.forEach((deletebtn) => {
//       deletebtn.addEventListener('click', () => {
//         todolist[deletebtn.id].single = true;
//         const onedelete = todolist.filter((todo) => todo.single !== true);
//         localStorage.setItem('list', JSON.stringify(onedelete));
//         Populate();
//       });
//     });
//   }

//   const trigger = document.querySelectorAll('.place-input');
//   trigger.forEach((trigger) => {
//     // Add event listener for saving edited item
//     trigger.addEventListener('keyup', (e) => {
//       if (e.key === 'Enter' && trigger.value !== '') {
//         todolist[trigger.id].description = trigger.value;
//         localStorage.setItem('list', JSON.stringify(todolist));
//         Populate();
//       }
//     });
//   });

//   const booxes = document.querySelectorAll('.box');
//   booxes.forEach((boox) => {
//     // Add event listener for checkbox changes
//     boox.addEventListener('change', (e) => {
//       if (e.target.checked) {
//         todolist[boox.id].completed = true;
//         boox.parentElement.lastElementChild.classList.add('checked');
//       } else {
//         todolist[boox.id].completed = false;
//         boox.parentElement.lastElementChild.classList.remove('checked');
//       }
//       localStorage.setItem('list', JSON.stringify(todolist));
//     });
//   });

//   const deleteButtons = document.querySelectorAll('.del');
//   deleteButtons.forEach((deletebtn) => {
//     // Add event listener for deleting an item
//     deletebtn.addEventListener('click', () => {
//       todolist.splice(deletebtn.id, 1); // Remove the item from the array
//       localStorage.setItem('list', JSON.stringify(todolist));
//       Populate();
//     });
//   });
// }

// // Event listener for the clear button
// clear.addEventListener('click', () => {
//   const updated = todolist.filter((todo) => todo.completed === false);
//   localStorage.setItem('list', JSON.stringify(updated));
//   Populate();
// });

// // Function to add a new todo item
// const addTodo = () => {
//   const task = {
//     description: input.value,
//     completed: false,
//   };
//   todolist.push(task);
//   localStorage.setItem('list', JSON.stringify(todolist));
//   input.value = '';
//   Populate();
//   deletefun(); // Add this line to reattach the event listeners
// };

// // Event listener for the input field
// input.addEventListener('keyup', (e) => {
//   const userInput = input.value;
//   if (e.key === 'Enter' && userInput) {
//     if (input.value !== '') {
//       addTodo();
//     }
//   }
// });

// Populate();
// deletefun();

let todolist = JSON.parse(localStorage.getItem('list')) || [];
const input = document.querySelector('.todo-input');
const clear = document.querySelector('.submit');

export default function Populate() {
  const attachEventListeners = () => {
    const edit = document.querySelectorAll('.place-input');
    edit.forEach((space) => {
      // Add event listener for editing
      space.addEventListener('click', () => {
        space.removeAttribute('readonly');
      });
    });

    const deleteButtons = document.querySelectorAll('.del');
    deleteButtons.forEach((deletebtn) => {
      // Add event listener for deleting an item
      deletebtn.addEventListener('click', () => {
        todolist.splice(deletebtn.id, 1); // Remove the item from the array
        localStorage.setItem('list', JSON.stringify(todolist));
        Populate();
      });
    });

    const booxes = document.querySelectorAll('.box');
    booxes.forEach((boox) => {
      boox.addEventListener('change', (e) => {
        const itemId = boox.id;
        if (e.target.checked) {
          todolist[itemId].completed = true;
          localStorage.setItem('list', JSON.stringify(todolist));
          boox.parentElement.parentElement.classList.add('checked');
        } else {
          todolist[itemId].completed = false;
          localStorage.setItem('list', JSON.stringify(todolist));
          boox.parentElement.parentElement.classList.remove('checked');
        }
      });
    });

    const trigger = document.querySelectorAll('.place-input');
    trigger.forEach((trigger) => {
      // Add event listener for saving edited item
      trigger.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && trigger.value !== '') {
          const itemId = trigger.previousElementSibling.id;
          todolist[itemId].description = trigger.value;
          localStorage.setItem('list', JSON.stringify(todolist));
        }
      });
    });
  };

  const forms = document.querySelector('.todo-form');
  forms.innerHTML = '';
  todolist.forEach((item, id) => {
    forms.innerHTML += `
      <div class="todo-form-group r-div" id="${id}">
        <div class="i-div">
          <label for="${id}">
            <input id="${id}" type="checkbox" class="box" ${item.completed ? 'checked' : ''}>
            <input id="${id}" type="text" readonly placeholder="${item.description}" class="place-input">
          </label>
        </div>
        <i id="${id}" class="fa-solid fa-trash del" name="deleted"></i>
        <i class="fa-solid fa-arrows-to-dot"></i>
      </div>`;
  });

  attachEventListeners(); // Attach event listeners after populating the list
}

// Event listener for the clear button
clear.addEventListener('click', () => {
  todolist = todolist.filter((item) => !item.completed);
  localStorage.setItem('list', JSON.stringify(todolist));
  Populate();
});

// Function to add a new todo item
const addTodo = () => {
  const task = {
    description: input.value,
    completed: false,
  };
  todolist.push(task);
  localStorage.setItem('list', JSON.stringify(todolist));
  input.value = '';
  Populate();
};

// Event listener for the input field
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    addTodo();
  }
});

Populate();