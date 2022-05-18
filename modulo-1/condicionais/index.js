/*Exercícios de interpretação de código
1-
a)Ele divide o número que o usuário digita por 2, se o número for divisível por dois, ele passa no teste.
b)Para os números pares
c)Para os números ímpares
2- 
a)O usuário escreve uma fruta, se ela tiver no catálogo, o código retorna o preço da fruta
b)"O preço da fruta Maçã é R$2.25 "
c)"O preço da fruta Pêra é R$5 "
3-
a)Está abrindo um prompt de comando para que o usuário escreva o primeiro número
b)A mensagem no terminal será "Esse número passou no teste". Se fosse -10 daria erro, pois o if só prevê a mensagem para números maiores que 0
c)Sim, pois não existe um destino para todos os números menores que 0
Exercícios de escrita de código
1-
a)
*/
let anos = +prompt("Quantos anos você tem?")
if (anos >= 18){
    console.log("Você pode dirigir.")
}
else {
    console.log("Você não pode dirigir.")
}
console.log (anos)
// 2-
let turno = prompt("Qual é o seu turno?")
if (turno === "M"){
    console.log("Bom dia!")
}
else if (turno === "V"){
    console.log("Boa tarde!")
}
else {
    console.log("Boa noite!")
}
console.log(turno)
// 3-
let periodo = prompt("Qual é o seu periodo?")
switch (periodo){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
    default:
        console.log("periodo não encontrado")
        break
}
// 4-
let genero = prompt("Qual é o gênero do filme?")
let preco = +prompt("Qual é o preço do ingresso?")
let lanche = prompt("Qual lanchinho você vai comprar?")
if(genero==="fantasia" && preco<15){
    console.log(`Bom filme! Aproveite o seu ${lanche}`)
}
else {
    console.log("Escolha outro filme :(")
}