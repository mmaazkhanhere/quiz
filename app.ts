#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import { type } from "os";
import Choices from "inquirer/lib/objects/choices.js";

let questionsToAsk:string[]=[];
let score:number=0;

function animationOff(){
    return new Promise((res)=>{
        setTimeout(res,2500);
    })
}

async function animationDisplay(){
    let title=chalkAnimation.rainbow('TypeScript Quiz');
    await animationOff();
    title.stop();
}

async function userName() {
    let UserName=await inquirer.prompt([{
        name:'UserName',
        type:'input',
        message:'Please enter your name: ',
    }])

    let secondTitle= chalkAnimation.pulse(`Welcome ${UserName.UserName}`);
    await animationOff();
    secondTitle.stop();
}

async function quiz() {
    await animationDisplay();
    await userName();
    console.log(`\nPlease follow the guidelines.\nThere is no time limit. 10 questions will be displayed to you and each hold 1 marks.\nBest of luck for the quiz.\n`);
    quizQuestions();
    console.log(chalk.bgBlue(`\nYour score is: ${score}`));
}

async function quizQuestions(){
    let questions= await inquirer.prompt([{
        name:'Q1',
        type:'list',
        message:'Which company developed and maintains Typescript',
        choice:['Google','Facebook','Microsoft','Apple']
    }]).then(async (answer) => {
      if(answer.Q1=='Microsoft'){
        score++;
      }  
    })
};

quiz();