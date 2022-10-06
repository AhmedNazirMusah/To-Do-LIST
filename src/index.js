import './style.css';
import addTodo from './todo.js';
import {
  deletefun, todolist, input,
} from './delete.js';

const forms = document.querySelector('.todo-form');
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
      addTodo();
    }
  }
});

deletefun();

export default populate;
