const removetask = (item, localValue, displayTask) => {
  const data = localValue ? [...localValue] : [];
  const remainingValue = data.filter((task) => task.index !== item);
  for (let i = 0; i < remainingValue.length; i += 1) remainingValue[i].index = i;
  localStorage.setItem('todo', JSON.stringify(remainingValue));
  displayTask(JSON.parse(localStorage.getItem('todo')));
};
export default removetask;