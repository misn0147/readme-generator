// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  if(license === 'None'){
    return ''
  }
  if(license === 'MIT'){
  return `![GitHub license](https://img.shields.io/badge/License:-MIT-blue.svg)`
  }
  if(license === 'APACHE 2.0'){
    return `![GitHub license](https://img.shields.io/badge/License:-Apache2.0-red.svg)`
  }
  if(license === 'GPL 3.0'){
    return `![GitHub license](https://img.shields.io/badge/License:-GPL3.0-yellow.svg)`
  }
  if(license === 'BSD 3'){
    return `![GitHub license](https://img.shields.io/badge/License:-BSD3-orange.svg)`
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(license === 'None'){
    return ''
  }
  if(license === 'MIT'){
  return `[Click here for MIT License information.](https://mit-license.org/)`
  }
  if(license === 'APACHE 2.0'){
    return `[Click here for Apache 2.0 License information.](https://www.apache.org/licenses/LICENSE-2.0.html)`
  }
  if(license === 'GPL 3.0'){
    return `[Click here for GPL 3.0 License information.](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  if(license === 'BSD 3'){
    return `[Click here for BSD 3 License information.](https://opensource.org/licenses/BSD-3-Clause)`
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return "None"
  }
  return `This project is covered under the ${license} license.`
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
## Description
${data.description}


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub Username: [${data.github}](https://github.com/${data.github})
For more information, please email me at: ${data.email}

`;
}

module.exports =  generateMarkdown;
