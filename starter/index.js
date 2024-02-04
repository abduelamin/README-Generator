const fs = require("fs");
const path = require("path");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "How should users use your project? Provide usage instructions:",
    name: "usage",
  },
  {
    type: "list",
    message: "Select a license for your project:",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "ISC License",
      "GNU General Public License v3.0",
      "Eclipse Public License",
      "BSD 2-Clause License",
      "Mozilla Public License 2.0",
      "None",
    ],
  },
  {
    type: "input",
    message: "Provide instructions for contributing to your project:",
    name: "contributing",
  },
];

inquirer.prompt(questions).then((data) => {
  data.tableOfContents = generateTableOfContents(data);

  fs.writeFile("GeneratedREADME.md", generateMarkdown(data), (err) =>
    err
      ? console.error(err)
      : console.log("Success! Data written to GeneratedREADME.md")
  );
});

function generateTableOfContents(data) {
  const sections = [];

  if (data.description) sections.push("Description");
  if (data.installation) sections.push("Installation");
  if (data.usage) sections.push("Usage");
  if (data.license) sections.push("License");
  if (data.contributing) sections.push("Contributing");

  return sections
    .map((section) => `- [${section}](#${section.toLowerCase()})`)
    .join("\n");
}
