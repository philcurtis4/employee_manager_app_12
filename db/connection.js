const {Client} = require('pg');


const client = new Client({
	user: 'postgres',
	password: 'pass',
	database: 'employees_db'
});

module.exports = client;