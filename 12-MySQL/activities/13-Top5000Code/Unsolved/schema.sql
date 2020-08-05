DROP DATABASE IF EXISTS top_songs_DB;

CREATE DATABASE top_songs_DB;

USE top_songs_DB;

CREATE TABLE top_songs_DB (
    id INTEGER,
    artist_name VARCHAR(50),
    song_name VARCHAR(100),
    year INTEGER,
    pop_score_world DECIMAL(10,4) NOT NULL,
    pop_score_usa DECIMAL(10,4) NOT NULL,
    pop_score_uk DECIMAL(10,4) NOT NULL,
    pop_score_europe(10,4) NOT NULL,
    pop_score_rest (10,4) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM top_songs_DB;








