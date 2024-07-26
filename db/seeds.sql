INSERT INTO departments (department_name) VALUES
	('engineering'),
	('finance'),
	('legal'),
	('sales');

INSERT INTO roles (title, salary, department) VALUES
	('lead sales', 90000, 4),
	('salesperson', 60000, 4),
	('lead engineer', 100000, 1),
	('software engineer', 75000, 1),
	('account manager', 90000, 2),
	('accountant', 70000, 2),
	('legal team lead', 150000, 3),
	('lawyer', 100000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
	('Will', 'Smith', 1, NULL),
	('Nicole', 'Wilson', 2, 1),
	('Jason', 'Bates', 3, NULL),
	('Tom', 'Holland', 4, 3),
	('Jake', 'Llona', 5, Null),
	('Jeremy', 'Blake', 6, 5),
	('David', 'Locke', 7, NULL),
	('Cole', 'Shepard', 8, 7);


	