import "./styles.css";
import { DisplayController } from "./render.js";
import { TodoList } from "./todoList.js";

const todoList = new TodoList()
todoList.add(
    "apply for jobs",
    "get a job lil bro",
    "29/09",
    "High"
)

todoList.add(
    "practice interviews",
    "prepare for interviews",
    "30/09",
    "High"
)

const displayController = new DisplayController(todoList);
displayController.updateScreen();
