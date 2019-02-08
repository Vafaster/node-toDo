let {argv} = require('./config/yargs');
let colors = require('colors');
let toDo = require('./to-do/to-do.js');
let param = argv._[0];
let description = argv.description;
let completed = argv.completed;

switch(param){
 case 'make': 
    let task =  toDo.toMake(description);
    console.log(task);
    break;
 case 'list': 
   let listTask = toDo.getAllTask();
   console.log('=========LIST========'.green);
   for(let task of listTask){
      console.log(`---- Task :  ${task.description} Status: ${task.completed}`);
   }
   console.log('=========END========'.green);
   break;
 case 'update': 
   let resp = toDo.updateTask(description, completed);
   console.log(resp);
   break;
 case 'delete':
   let respdel = toDo.deleteTask(description);
   console.log(respdel);
   break;
 default: console.log(`invalid argument ${colors.red(param)}`);
};

//console.log(argv);