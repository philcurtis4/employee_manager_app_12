INSERT INTO departments (department_name) VALUES
	('engineering'),
	('finance'),
	('legal'),
	('sales');

INSERT INTO roles (title, salary, department) VALUES
	('lead sales', 90000, 'sales'),
	('salesperson', 60000, 'sales'),
	('lead engineer', 100000, 'engineering'),
	('software engineer', 75000, 'engineering'),
	('account manager', 90000, 'finance'),
	('accountant', 70000, 'finance'),
	('legal team lead', 150000, 'legal'),
	('lawyer', 100000, 'legal');

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
	('Will', 'Smith', 1, NULL),
	('Nicole', 'Wilson', 2, 1),
	('Jason', 'Bates', 3, NULL),
	('Tom', 'Holland', 4, 3),
	('Jake', 'Llona', 5, Null),
	('Jeremy', 'Blake', 6, 5),
	('David', 'Locke', 7, NULL),
	('Cole', 'Shepard', 8, 7);


	