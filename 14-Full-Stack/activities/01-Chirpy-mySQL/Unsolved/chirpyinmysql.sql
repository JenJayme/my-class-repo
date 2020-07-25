DROP DATABASE IF EXISTS NewDunderMifflinDB;

CREATE DATABASE NewDunderMifflinDB;

USE NewDunderMifflinDB;

CREATE TABLE departments (
    department_id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (department_id)
);

CREATE TABLE roles (
    role_id INTEGER NOT NULL AUTO_INCREMENT,    
    title VARCHAR(60),
    salary DECIMAL(6,0),
    department_id INTEGER,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE employees (
    emp_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_name VARCHAR(50),
    title VARCHAR(60),
    manager_name VARCHAR(60),
    role_id INTEGER,
    manager_id INTEGER,
    department_id INTEGER,
    PRIMARY KEY (emp_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_name)
VALUES ('Scranton Branch'), ('Head Office'), ('Customer Service'), ('Accounting'), ("Warehouse");

INSERT INTO roles (title, salary)
VALUES ('Regional Manager','140000'),('Original Assistant Regional Manager','70000'),('Assistant Regional Manager','80000'),('Senior Accountant','75000'),('Chief Financial Officer','180000');

INSERT INTO employees (first_name, last_name, title, department_name)
VALUES ('Michael','Scott','Regional Manager','Scranton Branch'),
('Dwight','Schrute','Original Assistant to the Regional Manager','Scranton Branch'),
('Jim','Halpert','Assisant Regional Manager','Sales'),
('Kelly','Kapur','Customer Service Specialist','Customer Service'),
('Angela','Martin','Senior Accountant','Accounting'),
('Pam','Beasly','Receptionist','Administration'),
('Oscar','Martinez','Loader','Warehouse');

SELECT * FROM employees;
SELECT * FROM roles;
SELECT * FROM departments;