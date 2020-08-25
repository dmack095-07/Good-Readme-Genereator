const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [ 
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Describe how you created your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install your project and what are the minimum requirements?"
  },
  {
    type: "input",
    name: "usage",
    message: "How can your application be used?"
  },
  {
    type: "input",
    name: "contribution",
    message: "You can input your contributions here."
  },
  {
    type: "input",
    name: "test",
    message: "What are your test instructions?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license of your choice.",
    choices: [
      "Apache",
      "MIT",
      "BSD",
      "GPL",
      "MIT"
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
];


// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function (err){
    if (err){
      return console.log(err);
    }
    console.log("You did it");
  });

}

// function to initialize program
 function userPrompt(){
   return inquirer.prompt(questions);
 };

  function init() {
    userPrompt()
    .then(function (answer){
      const data = {
        title: answer.title,
        description: answer.description,
        installation: answer.installation,
        usage: answer.usage,
        license: answer.license,
        contribution: answer.contribution,
        test: answer.test,
        username: answer.username,
        email: answer.email,
      }
      const getMarkdown = generateMarkdown(data);
      return writeToFile("README.md", getMarkdown);
      
    });
}

// function call to initialize program
init();
