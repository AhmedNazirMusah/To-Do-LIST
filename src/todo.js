import { todolist, input } from './delete.js';

const addTodo = () => {
  const task = {
    description: input.value,
    completed: false,
  };
  todolist.push(task);
  localStorage.setItem('list', JSON.stringify(todolist));
  input.value = '';
  window.location.reload();
};

export default addTodo;