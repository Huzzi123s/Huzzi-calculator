#! usr/bin/env node

import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
       name: "firstname",
       type: "number",
       message: "Enter first Number",
    },

    {
        name: "secondname",
        type: "number",
        message: "Enter second Number",
    },

   
    {
        name: "operator",
        type: "list",
        choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"],
        message: "Enter first Number",
    }

]);


if(answer.operator === "Addition"){
    console.log(answer.firstname + answer.secondname)
} else if(answer.operator === "Subtraction") {
    console.log(answer.firstname - answer.secondname)
}else if(answer.operator === "Multiplication") {
    console.log(answer.firstname * answer.secondname)
}else if(answer.operator=== "Division"){
    console.log(answer.firstname / answer.secondname)
}else{
    console.log("invalid value")
}