const fs = require('fs');
const inquirer = require('inquirer');
const HTMLGenerator = require('./src/HTMLPage');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

class Prompt {
    constructor() {
        this.teamList = [];
    }

    getTeamList() {
        return this.teamList
    }

    questions() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'employeeRole',
                message: 'What is the role of the employee you are adding to the team?',
                choices: ['Intern', 'Engineer', 'Manager', 'Im all done, take me home!']

            })
            .then(({ employeeRole }) => {
                if (employeeRole === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school's name!");
                                    return false;
                                }
                            }
                        }

                        // Pushes Intern data into teamArray
                    ]).then(templateData => {
                        const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                        this.teamList.push(newIntern);
                        // Sends user back to menu
                        this.questions();
                    });
                } else if (employeeRole === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username!");
                                    return false;
                                }
                            }
                        }

                        // Pushes Engineer data into teamArray
                    ]).then(templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamList.push(newEngineer);
                        // Sends user back to menu
                        this.questions();
                    });
                } else if (employeeRole === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the manager's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the manager's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the manager's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the manager's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct manager's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Please enter the manager's office number",
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the office number should be a number!");
                                    return false;
                                }
                            }
                        },
                    ])

                        // Pushes Manager data into teamArray
                        .then((templateData) => {
                            const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                            this.teamList.push(newManager);
                            // Sends user back to menu
                            this.questions();
                        });
                } else if (employeeRole === 'Im all done, take me home!') {
                    //function that writes the html file in the dist folder
                    const pagehtml = HTMLGenerator(this.getTeamList());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);

                        console.log('Page created! Open in your browser to see your new Employees!');
                    });

                }
            })
    }
};

// Activates prompts in CLI
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;