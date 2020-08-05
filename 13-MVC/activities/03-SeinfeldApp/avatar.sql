DROP DATABASE IF EXISTS AvatarDB;
CREATE database AvatarDB;

USE AvatarDB;

CREATE TABLE CharactersTb (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  coolness_point INTEGER(100)NOT NULL,
  attitude VARCHAR(100) NOT NULL,
  power VARCHAR(100)NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO CharactersTb (name, coolness_point, attitude, power)
VALUES ("Ang",99,"comical","Air, fire, water, earth");

INSERT INTO CharactersTb(name, coolness_point, attitude, power)
VALUES ("Katara",120,"Responsible","Water");

INSERT INTO CharactersTb (name, coolness_point, attitude, power)
VALUES ("Zuko",65,"hengry","Fire");

INSERT INTO CharactersTb (name, coolness_point, attitude, power)
VALUES ("Toph",100,"Fierce","Earth");

INSERT INTO CharactersTb (name, coolness_point, attitude, power)
VALUES ("Sokka",60,"Complaining","No power");


SELECT * FROM CharactersTb;
