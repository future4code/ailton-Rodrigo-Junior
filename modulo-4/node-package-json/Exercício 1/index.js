// Exercício 1:
// a) Através do process.argv
//b) 
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

// c)
const age = Number(process.argv[3])
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos, você terá ${age + 7} anos.`)