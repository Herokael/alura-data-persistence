import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = evento => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  };
  
  const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
  
    //backticks
    const taskContent = document.createElement('div');
  
    // ---- date ----
    const calendar = document.querySelector("[data-form-date]");
    const fecha = calendar.value;
    const dateFormat = moment(fecha).format('DD/MM/YYYY');
    
    // --- localStorage ---
    console.log(value, dateFormat);
    const taskObj = {
      value,
      dateFormat
    };
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  
    // ---- task ----
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
  
    // task.innerHTML = content;
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
  };