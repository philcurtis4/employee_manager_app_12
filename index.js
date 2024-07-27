const inquirer = require('inquirer');

const client = require('./db/connection');
const MenuSelection = require('./lib/menu');




async function initializeMenu () {
	const answerObj = await MenuSelection.menu();
	
	
	switch(answerObj.menuChoices){
		case 'view all departments':
			await MenuSelection.viewDepartments();
			MenuSelection.menu();
			break;
		case 'view all roles':
			await MenuSelection.viewRoles();
			MenuSelection.menu();
			break;
		case 'view all employees':
			await MenuSelection.viewEmployees();
			MenuSelection.menu();
			break;
		case 'add a department':
			await MenuSelection.showAddDepartmentPrompt();
			MenuSelection.menu();
			break;
		case 'add a role':
			await MenuSelection.showAddRolePrompt();
			MenuSelection.menu();
			break;
		case 'add an employee':
			await MenuSelection.showAddEmployeePrompt();
			MenuSelection.menu();
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
