import svg from '../img/three-dots.svg';

const displayTask = () => {
  const taskList = document.getElementById('list');
  const task = [
    { index: 0, completed: false, description: 'Wash the dishes' },
    { index: 1, completed: true, description: 'Complete the todo list' },
    { index: 2, completed: true, description: 'Finish the last week project' },
  ];

  for (let i = 0; i < task.length; i += 1) {
    taskList.innerHTML += `<li class="task item"><p><input id=${task[i].index} type="checkbox"/> ${task[i].description}</p> ${svg}</li>`;
  }
  for (let i = 0; i < task.length; i += 1) {
    document.getElementById(`${task[i].index}`).checked = task[i].completed;
  }
};

export default displayTask;