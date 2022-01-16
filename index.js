const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs')

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
        cardCreator(data)
    })
}

// test input
// managerPrompt();

// test class creation
let noe = new Manager('noe navarro', 1234567, 'noe.navarro1019@gmail.com', 6239102064)

const cardCreator = (employee) => {
    // extract employee role
    let role = employee.getRole();
    let cardHTML = '';

    // logic for creating card for each role
    if (role === 'Manager'){
        // manager logic
        cardHTML = 
    `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <a href="#" class="card-link">${employee.email}</a>
                            <a href="#" class="card-link">${employee.officeNumber}</a>
                        </div>
                    </div>
    `
    } else if (role === 'Engineer'){
        // engineer logic
        cardHTML = 
    `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <a href="#" class="card-link">${employee.email}</a>
                            <a href="#" class="card-link">${employee.github}</a>
                        </div>
                    </div>
    `
    } else {
        // intern logic
        cardHTML = 
    `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employee.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Intern</h>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <a href="#" class="card-link">${employee.email}</a>
                            <a href="#" class="card-link">${employee.github}</a>
                        </div>
                    </div>
    `
    }
    return cardHTML;
}

let noeCard = cardCreator(noe);
console.log(noeCard);

// test html template
const template = require('./src/htmlTemplate');
const { resolve } = require('path');
let newTemp = template(noeCard);

// test writing of HTML file
fs.writeFile('./dist/teamHTML.html', newTemp, err=> {
    if(err){
        console.log(err);
        return;
    }
    console.log('The file was created successfully!')
})