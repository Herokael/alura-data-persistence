import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { readTasks } from './readTasks.js';

export const addTask = evento => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const fecha = calendar.value;
    const value = input.value;
    const dateFormat = moment(fecha).format('DD/MM/YYYY');
    
    if(value === '' || fecha === ''){
      return;
    }

    input.value = '';
    calendar.value = '';
    
    const taskObj = {
        value,
        dateFormat
      };

    list.innerHTML = '';
    
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    readTasks();
  };
  
  export const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li');
          task.classList.add('card');
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
          // llamado a función CHECK-COMPLETE
          taskContent.appendChild(checkComplete());
          taskContent.appendChild(titleTask);

    const dateElement = document.createElement("span");
          dateElement.innerHTML = dateFormat;
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          // llamado a función DELETE
          task.appendChild(deleteIcon());
    return task;
  };