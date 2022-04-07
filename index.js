const fs = require('fs');
const inquirer = require('inquirer');
const file = './dist/index.html';

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"

    },
    {
        type: 'input',
        name: 'employee-id',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    },   
]

const addMembers = [
    {
        type: 'confirm',
        name: 'new',
        message: 'Would you like to add another team member?',
        default: false
    },
]

const memberType = [
    {
        type: 'list',
        name: 'member',
        message: 'What type of team member would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

const engQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "What is the their name?"

    },
    {
        type: 'input',
        name: 'employee-id',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?'
    },
    
]

const intQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "What is the their name?"

    },
    {
        type: 'input',
        name: 'employee-id',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    },
]
// Function for Intern
function addIntern() {
    inquirer.prompt(intQuestion)
    .then((intAnswers) => {
        console.log(intAnswers);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                console.log('Your team file has been created!');
            } else {
                init();
            }
        })
    })
};
// Function for Engineer
function addEngineer() {
    inquirer.prompt(engQuestion)
    .then((engAnswers) => {
        console.log(engAnswers);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                console.log('Your team file has been created!');
            } else {
                init();
            }
        })
    })
};

// Function for Manager
function addManager() {
    inquirer.prompt(questions)
    .then((manAnswers) => {
        console.log(manAnswers);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                console.log('Your team file has been created!');
            } else {
                init();
            }
        })
    })
};


// Function to create index.html file


// Function to initialize app
function init() {
    inquirer.prompt(memberType)
    .then(({member}) => {
        if (member === 'Engineer') {
            // console.log(member)
            addEngineer();
        } else if (member == 'Intern') {
            // console.log(member)
            addIntern();
        } else if (member == 'Manager') {
            // console.log(member)
            addManager();
        } else {
            console.log(member);
        }
    })
};

init();