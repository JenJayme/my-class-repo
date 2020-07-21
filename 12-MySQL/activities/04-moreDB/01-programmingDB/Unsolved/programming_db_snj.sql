-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER NOT NULL AUTO_INCREMENT,

  -- Create a string column called "language" --
language VARCHAR(30),

  -- Create an integer column called "rating" --
rating INTEGER(10),

  -- Create a boolean column called "mastered" which will automatically fill with true when a new row is made and the value isn't otherwise defined. --
mastered BOOLEAN NOT NULL DEFAULT true,

  -- Set the id as this table's primary key
PRIMARY KEY (id)
);

-- Create new example rows

INSERT INTO programming_languages (language, rating, mastered)
VALUES ("HTML", 10);

INSERT INTO programming_languages (language, rating, mastered)
VALUES ("CSS", 8);

INSERT INTO programming_languages (language, rating, mastered)
VALUES ("Javascript", 80);

-- Create new table for programmers
CREATE TABLE programmers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(12),
  last_name VARCHAR(12),
  PRIMARY KEY(id)
);

-- Insert data 
INSERT INTO programmers (first_name, last_name)
VALUES ("Sergio", "Lopez");

INSERT INTO programmers (first_name, last_name)
VALUES ("Jen", "Jayme");
