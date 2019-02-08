const fs = require('fs');
const colors = require('colors');

let taskList = [];
let pathJSON_write = './db/data.json';
let pathJSON_read = '../db/data.json';

const toMake =(description)=> {
    loadDB();
    let to_do = {
        description,
        completed:false
    }
    taskList.push(to_do);
    SaveDB();
    return to_do
}

const getAllTask = () => {
    loadDB();
    return taskList;
}

const updateTask = (description , completed = true) => {
    loadDB();
    let index =  taskList.findIndex(task => task.description === description);
    if(index >= 0){
     taskList[index].completed = completed;
     SaveDB();
     return true;
    }
    return false;
}

const deleteTask = (description) => {
    loadDB();
    let index = taskList.findIndex(task => task.description === description);
    if(index >= 0){
        delete taskList[index];
        SaveDB();
        return true;
    }
    return false;
}

const SaveDB = () => {
    let data = JSON.stringify(taskList);
    fs.writeFile(pathJSON_write, data, (err) => {
        if(err)
          throw new Error('No se pudo Grabar', err);
    });
}

const loadDB = () => {
    try {
        taskList = require(pathJSON_read);
    } catch (error) {
        taskList = [];
    }
    
}

module.exports = {
    toMake,
    getAllTask,
    updateTask,
    deleteTask
}