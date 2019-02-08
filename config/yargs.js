let cmd_crear = {
    description: {
        description:'name of task' ,
        alias: 'd',
        demand:true
    }
}


let cmd_update = {
    description: {
        description:'name of task' ,
        alias: 'd',
        demand:true
    },
    completed: {
        description:'name of task' ,
        alias: 'c',
        default: true
    }
}

let argv = require('yargs')
            .command('make','Make a new Task', cmd_crear)
            .command('list','List of Taks')
            .command('update','Update status of Task', cmd_update)
            .command('delete','Delete a task', cmd_crear)
            .help()
            .argv;

module.exports= {
    argv
}