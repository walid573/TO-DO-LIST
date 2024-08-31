
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let todos = [];


function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center border-b p-2';
        li.innerHTML = `
            <input type="checkbox" 
                   onchange="checkTodo(${index})" 
                   ${todo.completed ? 'checked' : ''} 
                   class="mr-2">
            <span class="${todo.completed ? 'line-through text-gray-500' : ''}">${todo.text}</span>
            <span class="text-gray-400 ml-2 text-sm">(${todo.date})</span>
            <div class="ml-auto">
                <button onclick="editTodo(${index})" class="bg-yellow-300 p-1 rounded">Edit</button>
                <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}


addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const dateAdded = new Date().toLocaleDateString(); // Get current date
        todos.push({ text: todoText, completed: false, date: dateAdded });
        todoInput.value = '';
        renderTodos();
    }
});


function editTodo(index) {
    const newTodoText = prompt('Edit to-do item:', todos[index].text);
    if (newTodoText) {
        todos[index].text = newTodoText;
        renderTodos();
    }
}

m
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}


function checkTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}


