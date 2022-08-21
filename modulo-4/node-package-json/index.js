// Exercício 1:
// a) Através do process.argv
//b) 
// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// c)
// const age = Number(process.argv[3])
// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos, você terá ${age + 7} anos.`)

// Exercício 2
// a)
// let math = process.argv[2] 
// switch (math) {
//     case "add":
//         math = Number(process.argv[3]) + Number(process.argv[4])
//         break;
//     case "sub":
//         math = Number(process.argv[3]) - Number(process.argv[4])
//         break;
//     case "mult":
//         math = Number(process.argv[3]) * Number(process.argv[4])
//         break;
//     case "div":
//         math = Number(process.argv[3]) / Number(process.argv[4])
//         break;
//     default:
//         break;
// }

// console.log(math)
// Exercício 3
const tarefas = ["Lavar louça"]
tarefas.push(process.argv[2])
console.log(tarefas)