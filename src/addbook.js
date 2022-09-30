import { todolist, input } from './delete.js';

const addBook = () => {
  const task = {
    description: input.value,
    completed: false,
  };
  todolist.push(task);
  localStorage.setItem('list', JSON.stringify(todolist));
  input.value = '';
  window.location.reload();
  return false;
};

export default addBook;