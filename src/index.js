import './style.css';
import addBook from './addbook.js';
import {
  deletefun, todolist, forms, input,
} from './delete.js';

const populate = () => {
  todolist.forEach((item, id) => {
    forms.innerHTML += `<div class="todo-form-group r-div" id="${id}">
      <div class="i-div">
      <label for="${id}" id="${id}">
        <input id="${id}" type="checkbox" class="box">
        <input id="${id}" type="text" readonly placeholder="${item.description}" class="place-input">
      </label>
      </div>
      <i id="${id}" class="fa-solid fa-trash del" name="deleted"></i>
      <i class="fa-solid fa-arrows-to-dot"></i>
    </div>`;
  });
};

populate();
input.addEventListener('keyup', (e) => {
  const userInput = input.value;
  if (e.key === 'Enter' && userInput) {
    if (input.value !== '') {
      addBook();
    }
  }
});

deletefun();
