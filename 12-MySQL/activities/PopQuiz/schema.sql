DROP DATABASE IF EXISTS dundermifflinDB;

CREATE DATABASE dundermifflinDB;

USE dundermifflinDB;

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(75),
    PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, title)
VALUES ('Michael', 'Scott', 'Regional Manager');

INSERT INTO employees (first_name, last_name, title)
VALUES ('Dwight','Schrute','Original Assistant to the Regional Manager');

INSERT INTO employees (first_name, last_name, title)
VALUES ('Jim','Halpert','Assistant Regional Manager');