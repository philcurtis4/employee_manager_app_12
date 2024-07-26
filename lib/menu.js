const inquirer = require('inquirer');

async function menu () {
	const answerObj = await inquirer.prompt([
		{
			type: 'list',
			name: 'menuChoices',
			message: 'What would you like to do?',
			choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
		}
])
	return answerObj;
}

module.exports = menu;