#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList:  string [] = [];
let condition = true;

//print wellcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<==============================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>> ${chalk.bold.hex(`#999ff`)(`welcome to \`coding with ARSALAN\n`)}`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<==============================>>>\n`));


// while(condition){
//     let addtask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: "Enter your new task:"

//         }
//     ]);
//     todoList.push(addtask.task);
//     console.log(`${addtask.task}task added in todo-list successfully`);

//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want at add more task ?",
//             default: "false"
//         }
//     ]);
//     condition = addMoreTask.addmore
// }
// console.log("your updated Todo-list:"  ,todoList);

let main = async () =>{
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["add task", "delete task", "update task", "view todo-list", "exit"],
            }
        ])
        if(option.choice === "add task"){
            await addtask()

        }
        else if(option.choice === "delete task"){
            await deletetask()
        }
        else if(option.choice === "view todo-list"){
            await viewtask()
        }
        else if(option.choice === "exit"){
            condition = false;
        }
    }

}

let addtask = async () =>{
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task :"
        }
    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in todo-list`);
}
let viewtask = () => {
    console.log("\n your todo-list: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
}

// function to delete a task form the list
let deletetask = async () => {
    await viewtask() 
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the `index no. ` of the task you want to delete : ",
            
        }
    ]);
    let deletetask = todoList.splice(taskindex.in, 1);
    console.log(`\n ${deletetask} this task has been deleted successfully from your todo-list\n`);

    }

main ();