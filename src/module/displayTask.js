import svg from '../img/three-dots.svg';

const displayTask = (task) => {
  const taskList = document.getElementById('list');
  taskList.innerHTML = '';
  if (task) {
    for (let i = 0; i < task.length; i += 1) {
      taskList.innerHTML += `<li class="task item"><input type="checkbox"/><div class="taskContainer"><p  id=${task[i].index} contentEditable=true>${task[i].description}</p><div/> ${svg}</li>`;
    }
    // for (let i = 0; i < task.length; i += 1) {
    //     document.getElementById(`${task[i].index}`).checked = task[i].completed;
    // }
  }
};
export default displayTask;