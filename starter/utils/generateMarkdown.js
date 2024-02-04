// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  
  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}
  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} ${licenseBadge(
    data.license
  )}
  
  ## Contributing
  ${data.contributing}
  
  ## Questions
If you have any questions, feel free to reach out to me on [GitHub](https://github.com/${
    data.github
  }) or via email at ${data.email}.
  
`;
}

// Function to render the license badge
function licenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "ISC License":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Eclipse Public License":
      return "[![License: EPL](https://img.shields.io/badge/License-EPL-blue.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "BSD 2-Clause License":
      return "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

module.exports = generateMarkdown;
