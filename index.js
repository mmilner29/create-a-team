const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generateMarkdown');
const file = './dist/index.html';
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let cardsArray = []

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"

    },
    {
        type: 'input',
        name: 'employeeid',
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
        name: 'employeeid',
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
        name: 'employeeid',
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
        const int = new Intern(intAnswers.name, intAnswers.employeeid, intAnswers.email, intAnswers.school);
        console.log(int);
        addCard(int);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                appendCards();
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
        const eng = new Engineer(engAnswers.name, engAnswers.employeeid, engAnswers.email, engAnswers.github);
        console.log(engAnswers);
        addCard(eng);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                appendCards();
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
        const man = new Manager(manAnswers.name, manAnswers.employeeid, manAnswers.email, manAnswers.officeNumber);
        addCard(man);
        console.log(manAnswers);
        inquirer.prompt(addMembers)
        .then((response) => {
            if (!response.new) {
                appendCards();
                console.log('Your team file has been created!');
            } else {
                init();
            }
        })
    })
};


// Function to create index.html file
function writeToFile(fileName) {
    const html = generatePage();
    fs.writeFile(fileName, html, err => {
        if (err) throw new Error(err);
        // console.log('Your team file has been created! Check out index.html in the dist directory to see it after answering the prompts!');
    });
};


function finishMarkdown() {
    const endhtml = `
            </div>
            </div>
        </body>
        </html>
        `
        fs.appendFile(file, endhtml, function (err) {
            if (err) {
                console.log(err);
            };
        });
}

// Function to initialize app
function init() {
    writeToFile(file);
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

function addCard(member) {
    let name = member.getName();
    let role = member.getRole();
    let id = member.getId();
    let email = member.getEmail();

    if (role === 'Manager') {
        let officeNum = member.getOfficeNumber();
        card = `
        <div class="col">
            <div class="card text-dark bg-light m-3 border-info">
                <div class="card-body">
                    <div class="card-header">
                        <h2>${name}</h2>
                        <h3>Manager</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNum}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    } else if (role === 'Engineer') {
        let gitHub = member.getGithub();
        card = `
        <div class="col">
            <div class="card text-dark bg-light m-3 border-info">
                <div class="card-body">
                    <div class="card-header">
                        <h2>${name}</h2>
                        <h3>Engineer</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `

    } else if (role === 'Intern') {
        let school = member.getSchool();
        card = `
        <div class="col">
            <div class="card text-dark bg-light m-3 border-info">
                <div class="card-body">
                    <div class="card-header">
                        <h2>${name}</h2>
                        <h3>Intern</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

cardsArray.push(card);
};

// function writeCards(cardData) {
//         const length = cardsArray.length;

//             // for (let i = 0; i < length - 1; i++) {
//             let newCard = cardsArray.slice([length - 1])
//             console.log(newCard);
//             let cardString = newCard.toString();
//             console.log(cardString);
//             appendCards(cardString);
//             // }
            
//         // } else {
//         //     let newCard = cardsArray
//         //     console.log(newCard);
//         //     let cardString = newCard.toString();
//         //     console.log(cardString);
//         //     appendCards(cardString);
//         // }

// };

function appendCards() {
    const cardString = cardsArray.toString();

    fs.appendFile(file, cardString, function (err) {
        if (err) {
            console.log(err);
        };
    });

    finishMarkdown();
}

init();


 