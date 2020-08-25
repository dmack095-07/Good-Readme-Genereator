// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Table of Contents

  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#test)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}
  
  ## License:
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Contributing:
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions 

  -[Github Profile](https://github.com/${data.username})

  You can reach me at ${data.email} for additional questions!
  
  

`;
}

module.exports = generateMarkdown;
