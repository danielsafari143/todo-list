import './index.css';
import displayTask from './module/displayTask.js';
import adding from './module/add.js';
// import removetask from './module/remove.js';
import edit from './module/edit.js';

document.addEventListener('keyup', (event) => {
  const texte = document.getElementById(event.target.id).innerHTML;
  edit(event.target.id, texte, JSON.parse(localStorage.getItem('todo')), displayTask);
});

displayTask(JSON.parse(localStorage.getItem('todo')));

document.getElementById('btn').addEventListener('click', () => {
  const insertValue = document.getElementById('inputTask').value;
  return adding(insertValue, JSON.parse(localStorage.getItem('todo')), displayTask);
});

// document.getElementById('btn').addEventListener('click', () => {
//   // const insertValue = document.getElementById('inputTask').value;
//   removetask(4, JSON.parse(localStorage.getItem('todo')), displayTask);
// });