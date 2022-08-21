// Exercício 2
// a)
let math = process.argv[2] 
switch (math) {
    case "add":
        math = Number(process.argv[3]) + Number(process.argv[4])
        break;
    case "sub":
        math = Number(process.argv[3]) - Number(process.argv[4])
        break;
    case "mult":
        math = Number(process.argv[3]) * Number(process.argv[4])
        break;
    case "div":
        math = Number(process.argv[3]) / Number(process.argv[4])
        break;
    default:
        break;
}