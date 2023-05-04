const check = (item , localValue ) => {
    if(item.charAt(1) === 'i'){
        const store = [...localValue]
        let id = parseInt(item.charAt(0));
        store[id].completed = !store[id].completed;
        localStorage.setItem('todo' , JSON.stringify(store));
    }
}

export default check;