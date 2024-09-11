const { Client } = require('pg');

const client = new Client({
	user: 'username',
	password: 'password',
	host: 'host',
	port: 'port_number',
	database: 'database_name',
});
