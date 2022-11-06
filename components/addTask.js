import checkComplete from "./checkComplete.js"
import deleteIcon from './deleteIcon.js';
import { displayTask } from "./dispayTask.js";


export const addTask = (event) => {
  event.preventDefault();

  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector("[data-form-date");

  //calendar
  const date = calendar.value
  const dateFormat = moment(date).format("DD/MM/YYYY")
  const value = input.value;

  // control de form
  if( !value || !dateFormat){
    return
  }

  // clear inputs
  input.value = '';
  calendar.value = "";
  // Storage
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskObj = { value, dateFormat}

  list.innerHTML = ""
  taskList.push(taskObj)
  localStorage.setItem("tasks", JSON.stringify(taskList))


displayTask()  
}


export const createTask = ({value,dateFormat}) => {

  const task = document.createElement('li');
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  const dateElement = document.createElement("span");

  task.classList.add('card');
  titleTask.classList.add('task');

  titleTask.innerText = value;
  dateElement.innerHTML = dateFormat
  
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(dateElement)
  task.appendChild(deleteIcon());
  return task
};


