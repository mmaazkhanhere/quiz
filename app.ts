#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let score:number=0; //user intial score

function animationOff(){ //function for animation display
    return new Promise((res)=>{
        setTimeout(res,2500);
    })
}

async function animationDisplay(){ //function for animation
    let title=chalkAnimation.rainbow('TypeScript Quiz');
    await animationOff();
    title.stop();
}

async function userName() { //function for taking username and displaying it
    let UserName=await inquirer.prompt([{
        name:'UserName',
        type:'input',
        message:'Please enter your name: ',
    }])

    let secondTitle= chalkAnimation.pulse(`Welcome ${UserName.UserName}`); //username displayed in animation
    await animationOff();
    secondTitle.stop();
}

async function quizQuestions(){ //function for questions to be displayed
    
    let Q1= async function q1(){   //without async, next question will be displayed without waiting for user to select answer

    await inquirer.prompt([{ //first question to be asked
        name:'Q1',
        type:'list',
        message:'Which company developed and maintains Typescript',
        choices:['Google','Facebook','Microsoft','Apple']
        }]).then((answer) => { // if resolve, the value passed as an answer which is then used to check whether answer is right

    if(answer.Q1=='Microsoft'){ //if user select Microsoft as answer, increment his score (means he has correctly attempted the question)
        score++; //increment score by 1
    }});
    };
    
    let Q2= async function q2(){ //2 question 

    await inquirer.prompt([{
        name:'Q2',
        type:'list',
        message:'TypeScript is superset of :',
        choices:['HTML','JavaScript','CSS','Python'],
    }]).then((answer)=>{ //increment score if selected right answer
        if(answer.Q2=='JavaScript'){
            score++;
        }
    });
    };

    let Q3= async function q3(){ //3 question

    await inquirer.prompt([{
        name:'Q3',
        type:'list',
        message:'Which of the following is the typing principle of typescript?',
        choices:['Gradual','Dynamic','Duck','All of the above'],
    }]).then((answer)=>{ //increment score if correct
        if(answer.Q3=='Duck'){
            score++;
        }
    });
}

    let Q4= async function q4(){ //4th question
    
    await inquirer.prompt([{
        name:'Q4',
        type:'list',
        message:'What is the inherited type for the variable example in \'const example = [\'Dylan\']\'?',
        choices:['any []','string []','string','unknown []']
    }]).then((answer)=>{ //increment score if correct
        if(answer.Q4=='string []'){
            score++;
        }
    });
}

    let Q5= async function q5(){ //5th question
    
    await inquirer.prompt([{
        name:'Q5',
        type:'list',
        message:'TypeScript will always correctly infer the type of an array.',
        choices:['True','False'],
    }]).then((answer)=>{ //increment score if correct
        if(answer.Q5=='False'){
            score++;
        }
    });
}

    let Q6= async function q6(){ //6th question
    
    await inquirer.prompt([{
        name:'Q6',
        type:'list',
        message:'A ____ in terms of OOP is a blueprint for creating objects',
        choices:['method','function','constructor','class'],
    }]).then((answer)=>{ //increment score if correct
        if(answer.Q6=='class'){
            score++;
        }
    });
}

    let Q7= async function q7(){ //7th question
    
    await inquirer.prompt([{
        name:'Q7',
        type:'list',
        message:'Type Aliases are mostly used with ______.',
        choices:['Strings','Booleans','Numbers','None'],
    }]).then((answer)=>{ //increment score if correct
        if(answer.Q7=='Strings'){
            score++;
        }
    });
}

    let Q8= async function q8(){ //8th question
    
    await inquirer.prompt([{
        name:'Q8',
        type:'list',
        message:'_____ is similar to \'any\', but a safer alternative when uncertain about the type.',
        choices:['never','similar','unknown','none of the above'],
    }]).then(async (answer)=>{ //increment score if correct
        if(answer.Q8=='unknown'){
            score++;
        }
    })
};

let questionsToAsk=[Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8]; //adding all question into an array

for(let i=0;i<questionsToAsk.length;i++){ //asking the questions
    await questionsToAsk[i](); //await so that it waits until user select an option
}
}

async function quiz() { //main function
    await animationDisplay(); //calling display function
    await userName(); //calling username function
    console.log(chalk.bgMagenta(`\nPlease follow the guidelines.\nThere is no time limit. 8 questions will be displayed to you and each hold 1 marks.\nBest of luck for the quiz.\n`));
    await quizQuestions(); //calling question functions
    console.log(chalk.bgBlue(`\nYour score is: ${score}`)); //displaying the user score
}

quiz();