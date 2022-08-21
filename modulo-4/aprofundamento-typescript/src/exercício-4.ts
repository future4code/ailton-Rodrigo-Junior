type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Executar o npm run start.
// c) Arquivos .ts são colocados na pasta src para que sejam transpilados automaticamente para a pasta build assim que startamos o scipt.
// d) Acredito que ao colocar apenas tsc no scipt start ele irá atrás dos arquivos em typescript para transpilar todos de uma só vez.