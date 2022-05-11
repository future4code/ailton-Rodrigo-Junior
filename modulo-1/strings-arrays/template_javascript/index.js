/*Exercícios de interpretação de código
1- 
a.undefined
b.null
c.11
d.3
e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.9

2- "SUBI NUM ÔNIBUS EM MIRROCOS"
*/
// Exercícios de escrita de código
// 1-
const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu email?")
console.log("O email " + email + " foi cadastrado com sucesso. Seja bem-vinda(O) "+ nome)
// 2-
const comidasPreferidas = ["Hambúrguer", "Pizza", "Doce de Leite", "Goiabada", "Chocolate"]
console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas " + comidasPreferidas)
const comidaDoUsuario = prompt("Qual é a sua comida preferida?")
comidasPreferidas.splice(1,1)
comidasPreferidas.push("Essas são minhas comidas preferidas " + comidaDoUsuario)
console.log(comidasPreferidas)
// 3-
const listaDeTarefas = []
const tarefa1 = prompt("Fale uma tarefa que você vai executar hoje")
const tarefa2 = prompt("Fale uma tarefa que você vai executar hoje")
const tarefa3 = prompt("Fale uma tarefa que você vai executar hoje")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const tarefaFeita = prompt("Qual qual tarefa você já executou? A tarefa 0, a 1 ou a 2?")
const novaListaDeTarefas = listaDeTarefas.splice([tarefaFeita], 1)
console.log(novaListaDeTarefas)