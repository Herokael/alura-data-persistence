import {createTask} from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../assets/services/date.js";

export const readTasks = () => {
    const list = document.querySelector('[data-list]')
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates);

    dates.forEach( date => {
        list.appendChild(dateElement(date));
        
        tasksList.forEach( task => {
            if( date === task.dateFormat){
                list.appendChild(createTask(task));
            }
        });
    });

    
};