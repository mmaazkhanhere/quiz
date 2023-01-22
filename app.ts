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
    let Q1= await inquirer.prompt([{
        name:'Q1',
        type:'list',
        message:'Which company developed and maintains Typescript',
        choice:['Google','Facebook','Microsoft','Apple']
    }]).then(async (answer) => {
      if(answer.Q1=='Microsoft'){
        score++;
      }  
    });
    
    let Q2= await inquirer.prompt([{
        name:'Q2',
        list:'list',
        message:'TypeScript is superset of :',
        choices:['HTML','JavaScript','CSS','Python'],
    }]).then(async (answer)=>{
        if(answer.Q2=='JavaScript'){
            score++;
        }
    })

    let Q3= await inquirer.prompt([{
        name:'Q3',
        list:'list',
        message:'Which of the following is the typing principle of typescript?',
        choices:['Gradual','Dynamic','Duck','All of the above'],
    }]).then(async (answer)=>{
        if(answer.Q3=='Ducks'){
            score++;
        }
    })
};

quiz();