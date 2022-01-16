const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const validName = (input) => {
    // check for a first and last name
    let splitInput = input.split(' ');
    if (splitInput.length != 2){
        return 'Please enter a valid name (first and last name)'
    }
    return true;
}

const validId = (input) => {
    // check for a 7 digit id number
    if (input.length != 7){
        return 'Please enter a valid id number (must be 7 digits)'
    }
    return true;
}

const validEmail = (input) => {
    // check for an @ within the passed string
    if (input.includes('@')){
        return true;
    }
    return 'Please enter a valid email address (must contain @)';
}

const validNumber = (input) => {
    // check for a valid number (10 digits)
    if (input.length != 10){
        return 'Please enter a valid phone number (10 digits)';
    }
    return true;
}

// prompt for manager
let managerPrompt = () => {
    //  ask for user input 
    inquirer.prompt([
        {
            // promp team manager's name
            name: 'name',
            message: "Welcome to the team page builder! What is the team manager's name?",
            type: 'input',
            validate: validName
        },
        {
            name: 'id',
            message: "What is their employee number? (must be 7 digits)",
            type:'input',
            validate: validId
        },
        {
            name: 'email',
            message: "What is their email address?",
            type: 'input',
            validate: validEmail
        },
        {
            name: 'officenumber', 
            message: 'What is their office number?',
            type: 'input',
            validate: validNumber
        }
    ])
    .then(function(data){
        return console.log(data);
    })
}

// test input
managerPrompt();