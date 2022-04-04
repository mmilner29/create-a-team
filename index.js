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
        name: 'employee-id',
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
        type: 'checkbox',
        name: 'member',
        message: 'What type of team member would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

const engQuestion = [
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?'
    },
    
]

const intQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    },
]

// Function to create index.html file


// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            inquirer.prompt(addMembers)
            .then((response) => {
                if (response.new) {
                    inquirer.prompt(memberType)
                    .then((mType) => {
                        console.log(mType);
                    })
                } else {
                    console.log('Your team file has been created!');
                }
            })
    })
};

init();