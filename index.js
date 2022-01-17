const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const async = require('async');

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

// care creation logic
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
                            <p></p>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <p></p>
                            <p>Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></p>
                            <p>Phone: ${employee.officeNumber}</p>
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
                            <p></p>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <p></p>
                            <p>Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></p>
                            <p>Github: <a href="http://www.github.com/${employee.github}" class="card-link">${employee.github}</a></p>
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
                            <p></p>
                            <h7 class="card-subtitle mb-2 text-muted">${employee.id}</h7>
                            <p></p>
                            <p>Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></p>
                            <p>School: ${employee.school}</p>
                        </div>
                    </div>
    `
    }
    return cardHTML;
}

const checkNewMember = (fileNum) => {
    
    // check for new member
    inquirer.prompt([
        {
            name: 'newteam',
            message: "Please select a new team member",
            type: 'list',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(function(data){

        // if the team is complete, end process
        if (data.newteam === 'None'){
            return 
        } else if (data.newteam === 'Engineer'){
            inquirer.prompt([
                {
                    // promp name
                    name: 'name',
                    message: "What is the Engineer's name?",
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
                    name: 'github',
                    message: "What is their github username?",
                    type: 'input'
                }
            ])
            .then(function(data){
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                let card = cardCreator(engineer);
                
                // write text file
                fs.writeFile('./src/card' + fileNum +'.txt', card, (err) => {
                    if (err){
                        console.log(err);
                    }
                });
            })

        } else {
            // intern logic
            inquirer.prompt([
                {
                    // promp name
                    name: 'name',
                    message: "What is the Intern's name?",
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
                    name: 'school',
                    message: "What school do they attend?",
                    type: 'input'
                }
            ])
            .then(function(data){
                let intern = new Intern(data.name, data.id, data.email, data.school);
                let card = cardCreator(intern);
                fs.writeFile('./src/card' + fileNum +'.txt', card, (err) => {
                    if (err){
                        console.log(err)
                    }
                });
            })
        }
    })
}

// prompt for manager
const managerPrompt = () => {
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
        // compile managers card
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        let mangerCard = cardCreator(manager);
        fs.writeFile('./src/card1.txt', mangerCard, (err) => {
            if (err){
                console.log(err);
            }
    })
    })
    .then(function(data){
        checkNewMember(2);
    })
}

managerPrompt();

// // test clas/s creation
// let manager = new Manager('Noe Navarro', 1234567, 'noe.navarro1019@manager.com', 623555555)
// let engineer = new Engineer('Noe Navarro', 1234567, 'noe.navarro1019@engineer.com', 'nnavarr')
// let intern = new Intern('Noe Navarro', 1234567, 'noe.navarro@intern.com', 'UofA')

// // create cards from various employees
// let card1 = cardCreator(manager);
// let card2 = cardCreator(engineer);
// let card3 = cardCreator(intern)

// // concatenate into a single string
// let newString = card1 + card2 + card3
// console.log(newString);

// // generate html template
// const template = require('./src/htmlTemplate');
// let newTemp = template(newString);

// // test writing of HTML file
// fs.writeFile('./dist/teamHTML.html', newTemp, err=> {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('The file was created successfully!')
// })
