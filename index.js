// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Credit', 'License', 'Contributing', 'Test', 'Questions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFIle('./GENERATEDREADME.md', )
}

inquirer
  .prompt([
    {
      type: 'Title',
      name: 'title',
      message: 'What is the title?',
    },
    {
      type: 'Description',
      name: 'description',
      message: 'Describe the application?',
    },
    {
        type: 'Table of Contents',
        name: 'tableofcontents',
        message: 'What is included?',
    },
    {
        type: 'Installation',
        name: 'installation',
        message: 'How do you install?',
    },
    {
        type: 'Usage',
        name: 'usage',
        message: 'What are the terms for using the application??',
    },
    {
        type: 'License',
        name: 'license',
        message: 'What kind of license is required?',
    },
    {
        type: 'Contributing',
        name: 'contributing',
        message: 'Who contributed to the project?',
    },
    {
        type: 'Test',
        name: 'test',
        message: 'Test?',
    },
    {
        type: 'Questions',
        name: 'questions',
        message: 'Questions?',
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
    /*
        start the app
        console the array of questions to the terminal
        capture the user input for that question
    */
   console.log('Title')

    return
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository ()
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title ()
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions ()
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options ()
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username ()
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address ()
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents ()
// THEN I am taken to the corresponding section of the README