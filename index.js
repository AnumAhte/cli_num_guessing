#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number
//2) user input for guessing number
//3) compare user input with computer generated number and show result
const randomNum = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Guess a number between 1 to 10:",
    }
]);
if (answers.userguessedNumber == randomNum) {
    console.log("Congratulations you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
