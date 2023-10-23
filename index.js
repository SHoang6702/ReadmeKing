// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =require('inquirer')
// TODO: Create an array of questions for user input
// const questions = ['#Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Credit', 'License', 'Contributing', 'Test', 'Questions'];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // fs.writeFIle('./GENERATEDREADME.md', )
// }

inquirer
  .prompt([
    {
      type: 'input',
      name: '#Title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: '##Description',
      message: 'Describe the application?',
    },
    {
        type: 'input',
        name: '##Table of Contents',
        message: 'What is included?',
    },
    {
        type: 'input',
        name: '##Installation',
        message: 'How do you install?',
    },
    {
        type: 'input',
        name: '##Usage',
        message: 'What are the terms for using the application?',
    },
    {
        type: 'list',
        message: 'What kind of license is required?',
        name: '##License',
        choices: ['None', 'Unlicensed', 'Open Software License 3.0', 'Creative Commons license family', 'European Union Public License 1.1'],
    },
    {
        type: 'input',
        name: '##Contributing',
        message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: '##Test',
        message: 'Test?',
    },
    {
        type: 'input',
        name: '##Questions',
        message: 'Github name and Email?',
    },
  ])
  .then((data) => {
    const filename = `./GENERATEDREADME.md`

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to initialize app
function init() {
    return
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository (Working)
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title (Working)
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions (Working)
// THEN this information is adNoded to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options (Working)
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username (half working)
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address (half working)
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents (Not Working)
// THEN I am taken to the corresponding section of the README