// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (data.license === 'MIT') {
  //   return "MIT BADGE"
  // } else if (data.license === 'BSD') {
  //   return "BDS BADGE"
  // } else if (data.license === 'GPL') {
  //   return "GPL BADGE"
  // } else {
  //   return '';
  // };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub Username: [${data.github}](https://github.com/${data.github})
For more information, please email me at: ${data.email}

`;
}

module.exports = generateMarkdown;
