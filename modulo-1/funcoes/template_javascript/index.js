/*
Exercícios de interpretação de código
1-
a)10
  50
b)Não apareceria nada no console.
2-
a) Ela faz com que o texto inserido pelo usuário seja reescrito em letra minuscula e se a palavra "cenoura" é encontrada no texto
b)eu gosto de cenoura // true
cenoura é bom pra vista // true
cenouras crescem na terra // true
*/
// Exercícios de escrita de código
// 1-a)
function quemSouEu(){
    "Eu sou Rodrigo, tenho 25 anos, moro em Brasília e sou estudante."
}
// 1-b)
console.log(quemSouEu)
function apresentacao(){
    let mensagem = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao
    return mensagem
}
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
let endereco = prompt("Qual é cidade você mora?")
let profissao = prompt("Qual é a sua profissão?")
console.log(apresentacao(nome,idade,endereco,profissao))
// 2-a)
function soma(){
    const resultado = num1 + num2
    return resultado
}
let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
console.log(soma(num1,num2))
// // 2-b)
function igualOuMaior(){
const resultado = num1 >= num2
return resultado
}
// // 2-c)
console.log(igualOuMaior(num1,num2))
function numPar(){
    const sobra = num1%2
    const resultado = sobra === 0 
    return resultado
}
console.log(numPar(num1))
// 2-d)
function tamanhoCaixaAlta(mensagem) {
    mensagem = mensagem.toLowerCase()
    return mensagem
}
let texto1 = prompt("Insira uma texto aqui")
console.log(tamanhoCaixaAlta(texto1), texto1.length)
// 3-
function soma (){
    const resultado = numero1 + numero2
    return resultado
}
function subtracao(){
    const resultado = numero1 + numero2
    return resultado
}
function multiplica(){
    const resultado = numero1 + numero2
    return resultado
}
function divide(){
    const resultado = numero1 + numero2
    return resultado
}
let numero1 = prompt("Insira o primeiro número")
let numero2 = prompt("Insira o segundo número")
let conclusao = `Números inseridos: ${numero1} e ${numero2}
Soma: ${soma(numero1, numero2)}
Diferença:${subtracao(numero1, numero2)}
Multiplicação:${multiplica(numero1, numero2)}
Divisão:${divide(numero1, numero2)}`
console.log(conclusao)