const adding = (insertValue, localValue, displayTask) => {
  const data = localValue || [];
  data.push({ index: data.length, description: insertValue, completed: false });
  localStorage.setItem('todo', JSON.stringify(data));
  displayTask(data);
};
export default adding;
