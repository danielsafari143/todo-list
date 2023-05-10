const adding = (insertValue, localValue, displayTask) => {
  const data = localValue ? [...localValue] : [];
  data.push({ index: data.length, description: insertValue, completed: false });
  localStorage.setItem('todo', JSON.stringify(data));
  displayTask(JSON.parse(localStorage.getItem('todo')));
};
export default adding;
