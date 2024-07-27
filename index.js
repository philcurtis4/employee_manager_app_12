const inquirer = require('inquirer');

const client = require('./db/connection');
const MenuSelection = require('./lib/menu');




async function initializeMenu () {
	const answerObj = await inquirer.prompt([
		{
			type: 'list',
			name: 'menuChoices',
			message: 'What would you like to do?',
			choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Exit']
		}
	
])
	
	
	switch(answerObj.menuChoices){
		case 'view all departments':
			await MenuSelection.viewDepartments();
			initializeMenu();
			break;
		case 'view all roles':
			await MenuSelection.viewRoles();
			initializeMenu();
			break;
		case 'view all employees':
			await MenuSelection.viewEmployees();
			initializeMenu();
			break;
		case 'add a department':
			await MenuSelection.showAddDepartmentPrompt();
			initializeMenu();
			break;
		case 'add a role':
			await MenuSelection.showAddRolePrompt();
			initializeMenu();
			break;
		case 'add an employee':
			await MenuSelection.showAddEmployeePrompt();
			initializeMenu();
			break;
		case 'update an employee role':
			await MenuSelection.showUpdateEmployeePrompt();
			initializeMenu();
			break;
		case 'Exit':
			console.log('\nThanks for using the Employee Manager App!\n');
			process.exit();
	}
}

async function init () {
	await client.connect()
	console.log(`
		--------------------------------
		Welcome to the Employee Manager
		--------------------------------
		`);
	initializeMenu();
}

init();
