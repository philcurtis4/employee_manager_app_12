\c postgres

DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

\c employees_db

CREATE TABLE departments (
	id SERIAL PRIMARY KEY,
	department_name VARCHAR(30)
);

CREATE TABLE roles (
	id SERIAL PRIMARY KEY,
	title VARCHAR(30),
	salary DECIMAL NOT NULL,
	department INT NOT NULL,
	FOREIGN KEY (department) REFERENCES departments(id)
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT NOT NULL,
	manager_id INT,
	FOREIGN KEY (role_id) REFERENCES roles(id),
	FOREIGN KEY (manager_id) REFERENCES employees(id)
);