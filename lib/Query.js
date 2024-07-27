const client = require('../db/connection');

class Query {
	static async addDepartment (answerObj) {
		const sql = `INSERT INTO departments (department_name) VALUES ($1)`;
		
		await client.query(sql, [answerObj.department_name]);

		console.log('Department added successfully\n');
	}

	static async addRole (answerObj) {
		const sql = `INSERT INTO roles (title, salary, department) VALUES ($1, $2, $3)`;

		await client.query(sql, [answerObj.role_title, answerObj.role_salary, answerObj.department_id]);

		console.log('Role added successfully\n');
	}

	static async addEmployee (answerObj) {
		const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`;

		await client.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.role_id, answerObj.manager_id]);

		console.log('Employee added successfully\n')
	}

	static async updateRole (answerObj) {
		const sql = `UPDATE employees WHERE `
	}
}

module.exports = Query;