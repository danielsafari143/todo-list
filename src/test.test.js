/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-expressions */

import adding from './module/add.js';
import removetask from './module/remove.js';

describe('Add and remove one item in the todo list', () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="todo">
            <p class="task item">Today's To Do <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat dots" viewBox="0 0 16 16">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>
            </p>
            <div class="inputItem">
                <input id="inputTask" class="task inputItem" placeholder="Add to your list..." type="text"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="insertBtn" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </div>
            <ul class="tasks" id="list"></ul>
            <input type="button" id="btn" class="task btn" value="Clear all completed"/>
        </div>
        `;
  });

  const displayTask = jest.fn((task) => {
    const taskList = document.getElementById('list');
    taskList.innerHTML = '';
    for (let i = 0; i < task.length; i += 1) {
      taskList.innerHTML += `<li class="task item">
            <input id=${`${i}id`} type="checkbox"/><div class="taskContainer">
            <p id=${task[i].index} contentEditable=true>${task[i].description}</p>
            <div/> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="${i}trash" class="bi bi-trash3-fill trash" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg> 
          </li>`;
    }
  });

  test('Add an item to the list', () => {
    const listItem = document.getElementById('list');

    document.getElementById('insertBtn').click;
    adding('Daniel', JSON.parse(localStorage.getItem('todo')), displayTask);

    expect(listItem.childNodes[0].nodeName).toBe('LI');
    expect(listItem.childNodes[0].childNodes[2].childNodes[1].innerHTML).toBe('Daniel');
  });

  test('Remove an item from the list', () => {
    const listItem = document.getElementById('list');
    const fakeTasks = [
      { index: 0, description: 'Study th lessons', completed: false },
      { index: 1, description: 'wash the dishes', completed: false },
      { index: 2, description: 'Go to school', completed: false },
      { index: 3, description: 'Pry in the church', completed: false },
    ];

    localStorage.setItem('todo', JSON.stringify(fakeTasks));
    displayTask(JSON.parse(localStorage.getItem('todo')));
    document.getElementById('1trash').click;
    removetask(1, JSON.parse(localStorage.getItem('todo')), displayTask);

    expect(listItem.childNodes.length).toBe(3);
    expect(JSON.parse(localStorage.getItem('todo'))[1].description).toBe('Go to school');
    expect(JSON.parse(localStorage.getItem('todo'))[2].index).toBe(2);
    expect(listItem.childNodes[1].childNodes[2].childNodes[1].innerHTML).toBe('Go to school');
  });
});
