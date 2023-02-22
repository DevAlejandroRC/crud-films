-- Delete database if exists
DROP DATABASE IF EXISTS MDB;
-- Create database if no exists
CREATE DATABASE IF NOT EXISTS MDB;
-- Selected database MDB
USE MDB;
-- initial data are added to the database
INSERT INTO movies (title, original_language, genres, poster, release_date) 
VALUES ("El piloto", "EN", "Acción, Aventura, Suspense", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/juoinefK6tMbjwJhRpRvbAAmrTB.jpg", "2023-01-27"), 
("Ant-Man y la Avispa: Quantumanía", "EN", "Ciencia ficción, Aventura, Comedia", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg", "2023-02-17"),
("Winnie the Pooh: Blood and Honey", "EN", "Terror", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ZmbSkGEpXFufbDhgfTnSrFAguo.jpg", "2023-02-15");

