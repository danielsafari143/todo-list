const removeAll = (localValue, displayTask) => {
  const storage = [...localValue];
  const remainingValue = storage.filter((item) => item.completed !== true);
  for (let i = 0; i < remainingValue.length; i += 1) remainingValue[i].index = i;
  localStorage.setItem('todo', JSON.stringify(remainingValue));
  displayTask(remainingValue);
};

export default removeAll;