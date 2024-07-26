const inquirer = require('inquirer');
const {Client} = require('pg');

const menu = require('./lib/menu');

const client = new Client({
	user: 'postgres',
	password: 'pass',
	database: 'employees_db'
});

async function initializeMenu () {
	const answerObj = await menu();

	//switch statement then after that function in switch call initializeMenu again at bottom
	console.log(answerObj);
}

async function init () {
	await client.connect()
	console.log(`
		-------------------
		db connected
		-------------------
		`);
	initializeMenu();
}

init();
