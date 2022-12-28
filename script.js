let input  = prompt("Welcome to the Todo App, what do you wanna do?");
const todos = [];
while(input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('--------|-------|-------')
        for(const i in todos) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('--------|-------|-------')
    }
    else if(input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if(input === 'delete') {
        const index = prompt('which index would you like to delete?');
        todos.splice(parseInt(index), 1);
        console.log(`item #${index} was succesfully deleted! ${todos}`);
    }
    input  = prompt("What do you wanna do?");
}

console.log("You quit the app");