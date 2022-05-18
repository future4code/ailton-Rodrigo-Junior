/*
Exercícios de interpretação de código
1. O código guarda a variável valor e adiciona ao i, sendo assim vai imprimir "15"
2.a)Todos os números que são maiores que 18 "19, 21, 23, 25, 27, 30"
b) Sim, para fazer isso é só retirar o if
3.*
  **
  ***
  ****
  Exercícios de escrita de código
1.
*/
var bichos = +prompt("Quantos bichinhos de estimação você tem?")
    if (bichos > 0){
        for (let i=0; i < bichos; i++) {
        let nome = prompt("Qual é o nome dele?")
        let listaDeBichos = []
        listaDeBichos.push(nome) 
        console.log(listaDeBichos)
        }
    }
    else if (bichos === 0){
        console.log(`Que pena! Você pode adotar um pet!`)
    }
// 2.
let arrayOriginal = [10,20,30,40,55]
for (let numero of arrayOriginal){
    console.log(numero)
}
for (let numero of arrayOriginal)
console.log(numero/10)
for (let numero of arrayOriginal)
    if(numero%2 === 0){
        console.log(numero)
    }
let index = -1
for (let numero of arrayOriginal){
    index += 1
    console.log(`O elemento no index ${index} é:${numero}`)
}
const maiorNumero = (arr) => {
    let maior = 0
    for (let i = 0; i < arr.length; i++){
        const elemento = arr[i]
        if (maior < elemento){
            maior = elemento
        }
    }
    console.log(maior)
} 
const menorNumero = (arr) => {
    let menor = 1000
    for (let i = 0; i < arr.length; i++){
        const elemento = arr[i]
        if (menor > elemento){
            menor = elemento
        }
    }
    console.log(menor)
} 
maiorNumero(arrayOriginal)
menorNumero(arrayOriginal)