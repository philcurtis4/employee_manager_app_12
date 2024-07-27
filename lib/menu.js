const inquirer = require('inquirer');

const client = require('../db/connection');
const Query = require('./Query');



class MenuSelection { 
	static async menu () {
		const answerObj = await inquirer.prompt([
			{
				type: 'list',
				name: 'menuChoices',
				message: 'What would you like to do?',
				choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Exit']
			}
		
	])
	return answerObj;
};

	static async viewDepartments () {
		const sql = 'SELECT id, department_name FROM departments;';

		const data = await client.query(sql);

		console.table(data.rows);
	}

	static async viewRoles () {
		const sql = `
		SELECT 
		roles.id,
		title,
		department_name,
		salary
		FROM roles
			JOIN departments
				ON department = departments.id;
		`;

		const data = await client.query(sql);

		console.table(data.rows);
	}

	static async viewEmployees () {
		const sql = `
		SELECT
		employees.first_name,
		employees.last_name,
		roles.title,
		department_name,
		salary,
		managers.first_name AS manager
		FROM employees
			JOIN roles 
				ON role_id = roles.id
			JOIN departments 
				ON department = departments.id
			LEFT JOIN employees as managers
				ON employees.manager_id = managers.id;
		`;

		const data = await client.query(sql);
		

		console.table(data.rows);
	}

	static async showAddDepartmentPrompt () {
		const answerObj = await inquirer.prompt([
			{
				name: 'department_name',
				message: 'Enter the name of the new department: ',
			},
		])

		await Query.addDepartment(answerObj);
	}

	static async showAddRolePrompt () {
		const answerObj = await inquirer.prompt([
			{
				name: 'role_title',
				message: 'Enter the name of the new role: '
			},
			{
				name: 'role_salary',
				message: 'Enter the salary for the new role: '
			},
			{
				name: 'department_id',
				message: 'Enter the ID of the department the new role is in: '
			}
		]);

		await Query.addRole(answerObj);
	}

	static async showAddEmployeePrompt () {
		const answerObj = await inquirer.prompt([
			{
				name: 'first_name',
				message: 'Enter the first name of the new employee: '
			},
			{
				name: 'last_name',
				message: 'Enter the last name of the new employee: '
			},
			{
				name: 'role_id',
				message: 'Enter the ID of the role the new employee is in: '
			}
		]);

		await Query.addEmployee(answerObj);
	}

	static async showUpdateEmployeePrompt () {
		const answerObj = await inquirer.prompt([
			{
				name: 'employee_id',
				message: 'Enter the ID number name of the employee you would like to update: '
			},
			{
				name: 'role_id',
				message: 'Enter the ID of the role the employee is now in: '
			}
		]);

		await Query.updateRole(answerObj);
	}
}
module.exports = MenuSelection;