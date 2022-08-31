-- Aprofundamento sql
-- 1- a) Altera a tabela Actor deletando a coluna salary, b) altera a tabela gender por sex e terá o varchar(6), c) altera o varchar de gender pra 255 d)
ALTER TABLE Actor CHANGE gender gender VARCHAR (100);

-- 2-
UPDATE Actor SET name = "Leandro Hassum", birth_date = "1999-05-01", gender = "male" WHERE id = "003";
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "003";
UPDATE Actor SET name = "Juliana Paes", gender = "female" WHERE id = "003";
UPDATE Actor SET name = "Maitê Proença", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";
-- d) Aparece que nada é afetado. 

-- 3-
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- 4-
SELECT MAX(salary) from Actor;
SELECT MAX(salary) from Actor WHERE gender = "female";
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;

-- 5-
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
-- Criou uma tabela para mostrar quantos atores tem do genero masculino e quantos tem do genero feminino.
SELECT id, name FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY salary DESC;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- 6-
ALTER TABLE Films ADD playing_limit_date date;
ALTER TABLE Films CHANGE rate rating FLOAT;
UPDATE Films SET playing_limit_date = "2022-08-28" WHERE id = "001";
UPDATE Films SET playing_limit_date = "2020-01-25" WHERE id = "002";
DELETE FROM Films WHERE id = "001";
UPDATE Films SET synopsis = "Uma história muito bonita onde os enfrentam as armadilhas da vida" WHERE id = "001";
-- Funcionou, porém não alterou nada.