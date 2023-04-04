// const { choices } = require("yargs");
const inquirer = require('inquirer')
const fs = require('fs');
const lib = require('lib');

const generatorShapes = require('./lib/shapes')


const questions = [
    {
        type: 'input',
        message: 'please choose three letters for your logo:',
        name: 'letters',
    }, {
        type: 'input',
        message: 'Please enter a color keyword or hexadecimal number for your logo letters:',
        name: 'lettercolors',
    }, {
        type: 'list',
        messages: 'Please choose the shape of your logo:',
        name: 'shapes',
        choices: [
        'triangle',
        'square',
        'circle',
        ]
    }, {
        type: 'input',
        message: 'Please enter a color keyword or hexadecimal number for your logo:',
        name: 'colors',
    }
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(function (data) {
        const { letters, lettercolors, shapes, colors } = data;
        const logoData = { letters, lettercolors, shapes, colors };
        writeToFile("logo.svg", generatorShapes(logoData));
        console.log(data);
      })
  }

// Function call to initialize app
init();
