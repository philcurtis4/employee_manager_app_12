const inquirer = required('inquirer');
const {Client} = require('pg');

const client = new Client({
	user: 'postgres',
	password: 'pass',
	database: 'employees_db'
});

client.connect()
	.then(async () => {
		console.log(`
			-------------------
			db connected
			-------------------
			`);
		const answerObj = await inquirer.prompt([
			{
				type: 'list',
				name: 'menuChoices',
				message: 'What would you like to do?',
				choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
			}
		])
	})