#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let score = 0; //user intial score
function animationOff() {
    return new Promise((res) => {
        setTimeout(res, 2500);
    });
}
async function animationDisplay() {
    let title = chalkAnimation.rainbow('TypeScript Quiz');
    await animationOff();
    title.stop();
}
async function userName() {
    let UserName = await inquirer.prompt([{
            name: 'UserName',
            type: 'input',
            message: 'Please enter your name: ',
        }]);
    let secondTitle = chalkAnimation.pulse(`Welcome ${UserName.UserName}`); //username displayed in animation
    await animationOff();
    secondTitle.stop();
}
async function quizQuestions() {
    let Q1 = async function q1() {
        await inquirer.prompt([{
                name: 'Q1',
                type: 'list',
                message: 'Which company developed and maintains Typescript',
                choices: ['Google', 'Facebook', 'Microsoft', 'Apple']
            }]).then((answer) => {
            if (answer.Q1 == 'Microsoft') { //if user select Microsoft as answer, increment his score (means he has correctly attempted the question)
                score++; //increment score by 1
            }
        });
    };
    let Q2 = async function q2() {
        await inquirer.prompt([{
                name: 'Q2',
                type: 'list',
                message: 'TypeScript is superset of :',
                choices: ['HTML', 'JavaScript', 'CSS', 'Python'],
            }]).then((answer) => {
            if (answer.Q2 == 'JavaScript') {
                score++;
            }
        });
    };
    let Q3 = async function q3() {
        await inquirer.prompt([{
                name: 'Q3',
                type: 'list',
                message: 'Which of the following is the typing principle of typescript?',
                choices: ['Gradual', 'Dynamic', 'Duck', 'All of the above'],
            }]).then((answer) => {
            if (answer.Q3 == 'Duck') {
                score++;
            }
        });
    };
    let Q4 = async function q4() {
        await inquirer.prompt([{
                name: 'Q4',
                type: 'list',
                message: 'What is the inherited type for the variable example in \'const example = [\'Dylan\']\'?',
                choices: ['any []', 'string []', 'string', 'unknown []']
            }]).then((answer) => {
            if (answer.Q4 == 'string []') {
                score++;
            }
        });
    };
    let Q5 = async function q5() {
        await inquirer.prompt([{
                name: 'Q5',
                type: 'list',
                message: 'TypeScript will always correctly infer the type of an array.',
                choices: ['True', 'False'],
            }]).then((answer) => {
            if (answer.Q5 == 'False') {
                score++;
            }
        });
    };
    let Q6 = async function q6() {
        await inquirer.prompt([{
                name: 'Q6',
                type: 'list',
                message: 'A ____ in terms of OOP is a blueprint for creating objects',
                choices: ['method', 'function', 'constructor', 'class'],
            }]).then((answer) => {
            if (answer.Q6 == 'class') {
                score++;
            }
        });
    };
    let Q7 = async function q7() {
        await inquirer.prompt([{
                name: 'Q7',
                type: 'list',
                message: 'Type Aliases are mostly used with ______.',
                choices: ['Strings', 'Booleans', 'Numbers', 'None'],
            }]).then((answer) => {
            if (answer.Q7 == 'Strings') {
                score++;
            }
        });
    };
    let Q8 = async function q8() {
        await inquirer.prompt([{
                name: 'Q8',
                type: 'list',
                message: '_____ is similar to \'any\', but a safer alternative when uncertain about the type.',
                choices: ['never', 'similar', 'unknown', 'none of the above'],
            }]).then(async (answer) => {
            if (answer.Q8 == 'unknown') {
                score++;
            }
        });
    };
    let questionsToAsk = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8]; //adding all question into an array
    for (let i = 0; i < questionsToAsk.length; i++) { //asking the questions
        await questionsToAsk[i](); //await so that it waits until user select an option
    }
}
async function quiz() {
    await animationDisplay(); //calling display function
    await userName(); //calling username function
    console.log(chalk.bgMagenta(`\nPlease follow the guidelines.\nThere is no time limit. 8 questions will be displayed to you and each hold 1 marks.\nBest of luck for the quiz.\n`));
    await quizQuestions(); //calling question functions
    console.log(chalk.bgBlue(`\nYour score is: ${score}`)); //displaying the user score
}
quiz();
