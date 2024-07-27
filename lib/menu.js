const inquirer = require('inquirer');

const client = require('../db/connection');
const Query = require('./Query');



class MenuSelection { 

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
		const {rows: departments} = await client.query('SELECT * FROM departments');

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
				message: 'Select the department the new role is in:',
				type: 'list',
				choices: departments.map(departmentObj => {
					return {
						name: departmentObj.department_name,
						value: departmentObj.id
					}
				})
			}
		]);

		await Query.addRole(answerObj);
	}

	static async showAddEmployeePrompt () {
		const {rows: roles} = await client.query('SELECT * FROM roles');
		const{rows: employees} = await client.query('Select * FROM employees');
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
				message: 'Select the role the new employee is in:',
				type: 'list',
				choices: roles.map(roleObj => {
					return {
						name: roleObj.title,
						value: roleObj.id
					}
				})
			},
			{
				name: "manager_id",
				message: 'Select a manager for the New employee:',
				type: 'list',
				choices: employees.map(employeeObj => {
					return {
						name: employeeObj.first_name,
						value: employeeObj.id
					}
				})
			}
		]);

		await Query.addEmployee(answerObj);
	}

	static async showUpdateEmployeePrompt () {
		const {rows: employees} = await client.query('SELECT * FROM employees');
		const {rows: roles} = await client.query('SELECT * FROM roles');

		const answerObj = await inquirer.prompt([
			{
				name: 'employee_id',
				message: 'Select the employee whose role you would like to update:',
				type: 'list',
				choices: employees.map(employeeObj => {
					return {
						name: employeeObj.first_name,
						value: employeeObj.id
					}
				})
			},
			{
				name: 'role_id',
				message: "Select the new role of the employeee:",
				type: 'list',
				choices: roles.map(roleObj => {
					return {
						name: roleObj.title,
						value: roleObj.id
					}
				})
			}
		]);

		await Query.updateRole(answerObj);
	}
}
module.exports = MenuSelection;