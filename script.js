import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/dispayTask.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

// Quiero que se ejecute cada vez que inicializo la app
displayTask()