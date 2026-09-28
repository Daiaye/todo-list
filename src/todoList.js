import { Todo } from "./todo.js"

class TodoList {
    constructor() {
        this.todos = []
    }

    add(title, description, dueDate, priority) {
        const todoId = crypto.randomUUID();
        const todo = new Todo(todoId, title, description, dueDate, priority);
        this.todos.push(todo);
    }

    delete(id) {
        this.todos = this.todos.filter(todo => id !== todo.id);
    }

    find(id) {
        return this.todos.find(todo => id === todo.id);
    }

}

export { TodoList }