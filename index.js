const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const createHTML = require('./src/HTML-template.js');

const employees = [];

worker = async () => {
    // console.log(createHTML)
    const workerAnswers = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your team id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your Role?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]);

if(workerAnswers.role === 'Intern') {
    const internAnswer = await inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
        },
    ])
    const internCardInfo = new Intern(
        workerAnswers.name,
        workerAnswers.id,
        workerAnswers.email,
        internAnswer.school
    )
    console.log(internCardInfo);
    employees.push(internCardInfo);
    addMember();
}

else if(workerAnswers.role === 'Engineer') {
    const engineerAnswer = await inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
    ])
    const engineerCardInfo = new Engineer(
        workerAnswers.name,
        workerAnswers.id,
        workerAnswers.email,
        engineerAnswer.github
    )
    console.log(engineerCardInfo);
    employees.push(engineerCardInfo);
    addMember();
}

else if (workerAnswers.role === 'Manager') {
    const managerAnswer = await inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ])
    const managerCardInfo = new Manager(
        workerAnswers.name,
        workerAnswers.id,
        workerAnswers.email,
        managerAnswer.officeNumber
    )
    console.log(managerCardInfo);
    employees.push(managerCardInfo);
    addMember();
}};

addMember = async () => {
    const anotherMember = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'team',
            message: 'Would you like to add another team member?'
        }])
        
        if(anotherMember.team == true) {
            return worker()
        } 
        console.log(employees)
        generateFile();
        return employees;   
};

function writeToFile(data) {
    fs.writeFile('./Team-Profile.html', data, (err) => {
        if (err) throw err;
        else {
        console.log('Success!');
        }
    })};

async function generateFile() {
    let htmlContent = await createHTML(employees);
    console.log(htmlContent);

    try {
        writeToFile(htmlContent);
    } catch (e) {
        console.log(e);
    }
}

worker();