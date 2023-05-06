const check = (item, localValue) => {
  if (item.charAt(1) === 'i') {
    const store = [...localValue];
    const id = parseInt(item.charAt(0), 10);
    store[id].completed = !store[id].completed;
    localStorage.setItem('todo', JSON.stringify(store));
  };
};

export default check;