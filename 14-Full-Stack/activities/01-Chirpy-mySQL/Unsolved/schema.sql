DROP DATABASE IF EXISTS chirpy;

CREATE DATABASE chirpy;

USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE  position INT NOT NULL,
  id INTEGER AUTO_INCREMENT NOT NULL,
  chirp VARCHAR(100) NULL,
  author VARCHAR(50),
  created_at DATETIME,
  PRIMARY KEY (id)
);

INSERT INTO chirps (author, chirp, created_at) 
VALUES ('Bart', 'Whazzzzuuuup?','2020-07-24 10:00:05');

INSERT INTO chirps (author, chirp, created_at) 
VALUES ('Stacey', 'Hello','2020-07-24 10:10:15');

INSERT INTO chirps (author, chirp, created_at) 
VALUES ('Donna', "I'm here!",'2020-07-24 10:10:15');

INSERT INTO chirps (author, chirp, created_at) 
VALUES ('Jen', 'Yay!','2020-07-24 10:10:15');