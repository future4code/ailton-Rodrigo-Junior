/* Exercícios de interpretação de código
1- 10 
   10 5
2- 10 10 10
3- Trocar a let p por cargaHoraria
   Trocar a let t por salarioPorDia
   */
// Exercícios de escrita de código
// 1-
// let nome  
// let idade 
// console.log(typeof nome, typeof idade) 
// // d) Foi impresso undefined pois não foi atribuído nenhum valor à variável.
// nome = prompt("Qual é o seu nome?");
// idade = prompt("Qual é a sua idade?");
// console.log(typeof nome, typeof idade) 
// console.log("Olá",nome,", você tem", idade, "anos")
// // 2-
// let corDaRoupa
// let gostaDeCarne
// let gostaDePudim
// corDaRoupa = prompt("Você está usando roupa azul?")
// gostaDeCarne = prompt("Você gosta de carne?")
// gostaDePudim = prompt("Você gosta de pudim?")
// console.log("Você está usando roupa azul? - ", corDaRoupa)
// console.log("Você gosta de carne? - ", gostaDeCarne)
// console.log("Você gosta de pudim? - ", gostaDePudim)
// 3-
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)