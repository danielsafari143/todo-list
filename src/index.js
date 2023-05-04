import './index.css';
import displayTask from './module/displayTask.js';
import adding from './module/add.js';
import removetask from './module/remove.js';
import edit from './module/edit.js';
import check from './module/check.js';
import removeAll from './module/removeAll.js';

displayTask(JSON.parse(localStorage.getItem('todo')));

document.getElementById('insertBtn').addEventListener('click', () => {
  const insertValue = document.getElementById('inputTask').value;
  return adding(insertValue, JSON.parse(localStorage.getItem('todo')), displayTask);
});

document.addEventListener('click', (event) => {
  const ids = event.target.parentNode.id;
  if (ids.charAt(1) === 't') removetask(parseInt(ids.charAt(0), 10), JSON.parse(localStorage.getItem('todo')), displayTask);
  document.addEventListener('keyup', (event) => {
    const texte = document.getElementById(event.target.id).innerHTML;
    edit(event.target.id, texte, JSON.parse(localStorage.getItem('todo')), displayTask);
  });
});

document.addEventListener('change', (event) => {
  check(event.target.id, JSON.parse(localStorage.getItem('todo')));
});

document.getElementById('btn').addEventListener('click', () => {
  removeAll(JSON.parse(localStorage.getItem('todo')), displayTask);
});