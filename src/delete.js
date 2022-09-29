let todolist = JSON.parse(localStorage.getItem('list')) || [];
export const forms = document.querySelector('.todo-form');
export const input = document.querySelector('.todo-input');
export const clear = document.querySelector('.submit');

const deletefun = () => {
  if (todolist[0] === null) return;
  const edit = document.querySelectorAll('.place-input');
  edit.forEach((trigger) => {
    trigger.addEventListener('keyup', (e) => {
      trigger.removeAttribute('readonly');
      if (e.key === 'Enter') {
        todolist[trigger.id].description = trigger.value;
        localStorage.setItem('list', JSON.stringify(todolist));
        window.location.reload();
      }
    });
  });
  const checker = document.querySelectorAll('.box');
  checker.forEach((boox) => {
    boox.addEventListener('change', (e) => {
      if (e.target.checked) {
        todolist[boox.id].completed = true;
        boox.parentElement.lastElementChild.classList.add('checked');
      } else if (!e.target.checked) {
        todolist[boox.id].completed = false;
        boox.parentElement.lastElementChild.classList.remove('checked');
      }
      localStorage.setItem('list', JSON.stringify(todolist));
    });
  });
};

clear.addEventListener('click', () => {
  todolist = todolist.filter((books) => books.completed === false);
  localStorage.setItem('list', JSON.stringify(todolist));
  window.location.reload();
});

export { deletefun, todolist };
