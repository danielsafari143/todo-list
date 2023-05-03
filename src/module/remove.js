const removetask = (item, localValue, displayTask) => {
  const data = localValue || [];
  const remainingValue = data.filter((task) => task.index !== item);
  for (let i = 0; i < remainingValue.length; i += 1) remainingValue[i].index = i;
  localStorage.setItem('todo', JSON.stringify(remainingValue));
  displayTask(remainingValue);
};
export default removetask;