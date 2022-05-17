/* Exercícios de interpretação de código
1-a)
Matheus Nachtergaele
Denise Fraga
canal:"Globo" , horario:"14h"
2-a)
nome:"Juca", idade: 3, raca:"SRD"
nome:"Juba", idade: 3, raca:"SRD"
nome:"Jubo", idade: 3, raca:"SRD"
b) Copia as propriedades do objeto.
3-a) false
undefined
b) Imprimiu "False e undefined" pois no primeiro console.log pediu a propriedade de backender e no segundo a propriedade de altura, que não foi informada.
Exercícios de escrita de código
1.*/
const pessoa = {
    nome:"Rodrigo Júnior",
    apelidos:["Juninho", "Juneco", "Diguinho"]
}
function mudaNome(obj) {
    const novoNome = {
        ...obj,
        apelidos:["Drigo", "Driguinho", "Ninho"]
    }
    console.log(`Eu sou ${novoNome.nome}, mas pode me chamar de: ${novoNome.apelidos[0]}, ${novoNome.apelidos[1]} ou ${novoNome.apelidos[2]}`)
}
mudaNome(pessoa)
// 2.
const obj1 = {
    nome:"Rodrigo", 
    idade:25,
    profissao:"Estudante"
}
const obj2 = {
    nome:"Marina",
    idade:22,
    profissao:"Enfermeira"
}
function descrever(obj) {
    const descricao = [`${obj.nome}, ${obj.nome.length}, ${obj.idade}, ${obj.profissao}, ${obj.profissao.length}`]
    console.log(descricao)
}
descrever(obj1)
descrever(obj2)
// 3.
var carrinho = []
const fruta1 = {
    nome: "Maçã",
    disponivel: true
}
const fruta2 = {
    nome: "Banana",
    disponivel: true
}
const fruta3 = {
    nome: "Graviola",
    disponivel: true
}
function comprar(obj){
    carrinho.push(obj)
    console.log(carrinho)
}
comprar(fruta1)
comprar(fruta2)
comprar(fruta3)

