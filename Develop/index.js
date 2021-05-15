// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide your installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide your usage information:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide your contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide your test instructions:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license is your project covered under?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your gitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ])
};

// TODO: Create a function to write README file
questions()
    .then(data => {
        var template = generateMarkdown(data)
        fs.writeFile('README.md', template, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        })
    });



