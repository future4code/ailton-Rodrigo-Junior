/*
Exercícios de Interpretação de Código
1- 
a. false
b. false
c. true
d. boolean
2- O problema é que o valor do prompt será recebido como uma string, então o console irá imprimir o primeiro número e logo em seguida o segundo número e não a soma entre eles.
3- 
let primeiroValor = prompt("Digite um numero!")
let segundoValor = prompt("Digite outro numero!")
let primeiroNumero = Number(primeiroValor)
let segundoNumero = Number(segundoValor)
const soma = primeiroNumero + segundoNumero

console.log(soma)
Exercício de escrita de código
1-
*/
var idadeUsuario = prompt("Qual é a sua idade?")
var idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")
var maisVelho = idadeUsuario>idadeAmigo
console.log("Sua idade é maior que a do seu amigo?", maisVelho)
// 2-
var numeroPar = prompt("Insira um numero par")
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)
// c) Sempre que o número for par, o resto é 0.
// d) Sempre que o número for ímpar, o resto é 1.
// 3-
var idade = prompt("Quantos anos você tem?")
var idadeMeses = idade *12
var idadeDias = idadeMeses*30
var idadeHoras = idadeDias *24
console.log("Sua idade em meses é:", idadeMeses)
console.log("Sua idade em dias é:", idadeDias)
console.log("Sua idade em horas é:", idadeHoras)
// 4-
let primeiroValor = prompt("Digite um número!")
let segundoValor = prompt("Digite outro número!")
let primeiroNumero = Number(primeiroValor)
let segundoNumero = Number(segundoValor)
let primeiroNumeroMaior = primeiroNumero > segundoNumero
let primeiroNumeroIgual = primeiroNumero === segundoNumero
let primeiroNumeroDivisor = primeiroNumero % segundoNumero
let segundoNumeroDivisor = segundoNumero % primeiroNumero
let restoPrimeiraDivisao = primeiroNumeroDivisor === 0 
let restoSegundaDivisao = segundoNumeroDivisor === 0
console.log("O primeiro número é maior que o segundo?", primeiroNumeroMaior)
console.log("O primeiro número é igual ao segundo?", primeiroNumeroIgual)
console.log("O primeiro número é divisível pelo segundo?", restoPrimeiraDivisao)
console.log("O segundo número é divisível pelo primeiro?", restoSegundaDivisao)