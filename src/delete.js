const todolist = JSON.parse(localStorage.getItem('list')) || [];
export const input = document.querySelector('.todo-input');
export const clear = document.querySelector('.submit');

const deletefun = () => {
  if (todolist[0] === null) return;
  const edit = document.querySelectorAll('.place-input');
  edit.forEach((space) => {
    space.addEventListener('click', () => {
      space.removeAttribute('readonly');
    });
  });
  edit.forEach((trigger) => {
    trigger.addEventListener('keyup', (e) => {
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
      } else {
        todolist[boox.id].completed = false;
        boox.parentElement.lastElementChild.classList.remove('checked');
      }
      localStorage.setItem('list', JSON.stringify(todolist));
    });
  });

  const singledelete = document.querySelectorAll('.del');
  const itemz = [...singledelete];
  itemz.forEach((deletebtn) => {
    deletebtn.addEventListener('click', () => {
      todolist[deletebtn.id].single = true;
      const onedelete = todolist.filter((todo) => todo.single !== true);
      localStorage.setItem('list', JSON.stringify(onedelete));
      window.location.reload();
    });
  });
};

clear.addEventListener('click', () => {
  const updated = todolist.filter((todo) => todo.completed === false);
  localStorage.setItem('list', JSON.stringify(updated));
  window.location.reload();
});

export { deletefun, todolist };
