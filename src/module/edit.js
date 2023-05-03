const edit = (item, updatedValue, localValue) => {
  if (Number.isInteger(parseInt(item, 10))) {
    const newValue = [...localValue];
    newValue[item].description = updatedValue;
    localStorage.setItem('todo', JSON.stringify(newValue));
  }
};

export default edit;