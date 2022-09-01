-- Relações SQL
-- 1- a) Chave estrangeira é o que conecta uma tabela na outra
-- b)
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id)
);

SELECT * FROM Rating;
SELECT * FROM Films;
SELECT * FROM Actor;

INSERT INTO Rating Values (
"001",
"Ótimo filme, com muito humor e tudo que o brasileiro gosta.",
9,
"004"
);

INSERT INTO Rating Values (
"002",
"Filme clichê com muita comédia",
7,
"003"
);

INSERT INTO Rating Values (
"003",
"Filme que retrata a sociedade como ela é",
8,
"002"
);

-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-rodrigo-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`))
-- d)
ALTER TABLE Films DROP rating;

-- e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-rodrigo-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Films` (`id`))

-- 2- a)É uma tabela que vai conectar uma tabela de atores com uma tabela de filmes.
-- b)
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES(
"002",
"002"
);

INSERT INTO MovieCast VALUES(
"002",
"003"
);

INSERT INTO MovieCast VALUES(
"002",
"004"
);

INSERT INTO MovieCast VALUES(
"002",
"005"
);

INSERT INTO MovieCast VALUES(
"003",
"002"
);

INSERT INTO MovieCast VALUES(
"003",
"004"
);

-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-rodrigo-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-rodrigo-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
DELETE FROM Actor WHERE name = "Flávia Alessandra";

-- 3- a) Ele junta as informações da tabela de rating com Films, onde o id do filme é igual ao id do rating
SELECT * FROM Films
INNER JOIN Rating ON Films.id = Rating.movie_id;

-- b)
SELECT Films.id, Films.name, rate FROM Films
INNER JOIN Rating ON Films.id = Rating.movie_id;