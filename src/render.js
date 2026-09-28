class DisplayController {
    constructor(todoList) {
        this.todoList = todoList
        const container = document.querySelector(".container");
        container.addEventListener("click", (e) => this.clickHandlerTodo(e));
    } 
    

    updateScreen() {
        const container = document.querySelector(".container");
        container.textContent = "";

        for (const todo of this.todoList.todos) {
            const todoElement = this.createTodoElement(todo)
            container.append(todoElement);
        }
    }

    createTodoElement(todo) {
        const todoContainer = document.createElement("div");
        todoContainer.dataset.id = todo.id;

        const checkbox = document.createElement("button");
        const checkboxText = todo.isCompleted() ? "completed" : "not completed";
        checkbox.textContent = checkboxText;
        checkbox.dataset.action = "toggle";

        const todoTitle = document.createElement("div");
        todoTitle.textContent = todo.title;

        const todoDescription = document.createElement("button");
        todoDescription.textContent = "Details"
        todoDescription.dataset.action = "details";

        const todoDueDate = document.createElement("div");
        todoDueDate.textContent = todo.dueDate

        const todoEdit = document.createElement("button");
        todoEdit.textContent = "Edit"
        todoEdit.dataset.action = "edit";

        const todoDelete = document.createElement("button");
        todoDelete.textContent = "Delete"
        todoDelete.dataset.action = "delete";

        todoContainer.append(checkbox);
        todoContainer.append(todoTitle);
        todoContainer.append(todoDescription);
        todoContainer.append(todoDueDate);
        todoContainer.append(todoEdit);
        todoContainer.append(todoDelete);

        todoContainer.classList.add("todo")

        return todoContainer;
    }

    clickHandlerTodo(e) {
        const button = e.target.closest("button[data-action]");
        if (!button) return

        const todoDiv = button.closest("[data-id]");
        const id = todoDiv.dataset.id;
        const todo = this.todoList.find(id);
        
        switch (button.dataset.action) {
            case "toggle":
                todo.toggle();
                break;
            case "details":
                alert(todo.description);
                break;
            case "edit":
                alert("edit pop up");
                break;
            case "delete":
                this.todoList.delete(id);
                break;
        }
        this.updateScreen()
    }
}

export { DisplayController }