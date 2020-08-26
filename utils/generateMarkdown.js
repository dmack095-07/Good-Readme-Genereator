// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)

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

  For more information vist: (https://opensource.org/licenses/${data.license})

  ## Contributing:
  ${data.contribution}

  ## Test:
  ${data.test}

  ## Questions:

  Here is a link to my [Github Profile](https://github.com/${data.username})

  You can reach me at ${data.email} for additional questions!
`;
}

module.exports = generateMarkdown;
