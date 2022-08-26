CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor VALUES(
  "003", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor VALUES(
  "004", 
  "Antônio Fagundes",
  40000,
  "1949-04-18", 
  "male"
);

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT * FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";
-- Nada foi retornado!

SELECT id, name, salary FROM Actor WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE name LIKE "%g" OR name LIKE "%G%";

SELECT * FROM Actor WHERE name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%" AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Films (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
date DATE NOT NULL,
rate INT NOT NULL
);

INSERT INTO Films VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Films VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Films VALUES (
"003",
"Dona flor e seus dois maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Films VALUES (
"004",
"O auto da compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-10",
9
);

SELECT id, name, rate FROM Films WHERE id = "004";

SELECT * FROM Films WHERE name = "Dona flor e seus dois maridos";

SELECT id, name, synopsis FROM Films WHERE rate >= 7;

SELECT * FROM Films WHERE name LIKE "%vida%";

SELECT * FROM Films WHERE name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";

SELECT * FROM Films WHERE date < "2022-08-26";

SELECT * FROM Films WHERE date < "2020-05-04" AND (name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rate > 7;
