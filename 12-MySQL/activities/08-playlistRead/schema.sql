-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS playlist_db;
-- Create a database called programming_db --
CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    title VARCHAR(100),
    artist VARCHAR(100),
    genre VARCHAR(100),
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Into The Mystic", "Van Morrison", "classic rock" )

INSERT INTO songs (title, artist, genre)
VALUES ("Smile", "Katy Perry", "pop" )

INSERT INTO songs (title, artist, genre)
VALUES ("Not Throwing Away My Shot", "Manuel Lin Miranda", "broadway" )

INSERT INTO songs (title, artist, genre)
VALUES ("Sweet Dreams", "Eurythmics", "pop" )

INSERT INTO songs (title, artist, genre)
VALUES ("Bad Guy", "Billie Eilish", "alternative" )

INSERT INTO songs (title, artist, genre)
VALUES ("Country Roads", "John Denver", "country" )


