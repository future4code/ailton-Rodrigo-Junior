// Exercício 1
const nome: string = "Rodrigo"
const aniversario: string = "28/05/1996"

function separaDia(
    nome: string,
    aniversario: string
) {
    let splitted = aniversario.split("/", 3)
    return `Olá me chamo ${nome}, nasci no dia ${splitted[0]} do mês ${splitted[1]} do ano de ${splitted[2]}`
}

console.log(separaDia(nome, aniversario))

// Exercício 2
const idade: number = 26

function printVarType(a: any) {
    return typeof a
}
console.log(`O tipo da sua variável é: ${printVarType(idade)}`)

// Exercício 3
enum GENERO {
    ACAO = "Ação",
    DRAMA = "Drama",
    COMEDIA = "Comédia",
    ROMANCE = "Romance",
    TERROR = "Terror"
}

function returnFilme(
    nome: string,
    anoLancamento: number,
    genero: string,
    nota?: number
) {
    if (nota === undefined) {
        return {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero
        }
    }
    else {
        return {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao: nota
        }
    }
}

const filmeName: string = "Duna"
const lancamentoFilme: number = 2021
const filmeGenero: string = GENERO.ACAO
const nota: number = 74

console.log(returnFilme(filmeName, lancamentoFilme, filmeGenero, nota))

// Exercício 4
enum SETORES {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const colaboradores: Colaboradores[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

const filteredColaboradores = colaboradores.filter(function (array) {
    return array.setor === "Marketing" && array.presencial === true
})

console.log(filteredColaboradores)

// Exercício 5
type NameEmail = {
    name: string,
    email: string,
    role: string
}

const nameEmail: NameEmail[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

const filteredNameEmail = nameEmail.filter(function (array) {
    return array.role === "admin"
})

const mapFilteredNameEmail = filteredNameEmail.map((array) => {
    return array.email
})

console.log(mapFilteredNameEmail)

// Exercício 6
type ClientesBanco = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientesBanco: ClientesBanco[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const clientesDebitos = clientesBanco.map((array) => {
    const mapDebitos = array.debitos.reduce((prev, next) => prev + next, 0);
    const subSaldo = array.saldoTotal - mapDebitos;
    array.saldoTotal = subSaldo
    array.debitos = [0]
    if (array.saldoTotal < 0) {
        return array
    }
})

console.log(clientesDebitos)

// Exercício 7
type Estoque = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const estoque: Estoque[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const novoValor = estoque.map((array) => {
    const valorAntigo = array.valorUnitario as number
    const valorAjustado = valorAntigo.toFixed(2).replace('.', ',')
    array.valorUnitario = `R$ ${valorAjustado}`
    return array
})

console.table(novoValor)

// Exercício 8
const nascimento: any = new Date("04/23/1993");
const emissao: any = new Date("11/07/2015");
const agora: any = new Date();
function renova(
    nascimento: any,
    emissao: any,
    agora: any
) {
    const idade = Math.abs(agora - nascimento) / (1000 * 3600 * 24 * 365)
    const diferencaEmissao = Math.abs(agora - emissao) / (1000 * 3600 * 24 * 365)
    if (idade <= 20) {
        return diferencaEmissao >= 5
    }
    else if (idade > 20 || idade < 50) {
        return diferencaEmissao >= 10
    }
    else if (idade > 50) {
        return diferencaEmissao > 15
    }
}

console.log(renova(nascimento, emissao, agora))

// Exercício 9
function anagrama(
    palavra: string
) {
    let numeroLetras = palavra.length
    let resultado = numeroLetras
    for (let index = 1; index < numeroLetras; index++) {
        resultado *= index
    }
    return resultado
}

const exemplo = "Ailton"

console.log(anagrama(exemplo))

// Exercício 10
function recebeCPF(
    cpf: string
) {
    let soma: number;
    let resto;
    soma = 0;
    if (cpf === "00000000000") {
        return false
    }
    for (let index = 1; index <= 9; index++) {
        soma = soma + parseInt(cpf.substring(index - 1, index)) * (11 - index);
        resto = (soma * 10) % 11;
    }
    if (resto === 10 || resto === 11) {
        resto = 0
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false
    }
    soma = 0;
    for (let index = 1; index <= 10; index++) {
        soma = soma + parseInt(cpf.substring(index - 1, index)) * (12 - index);
        resto = (soma * 10) % 11
    }
    if (resto === 10 || resto === 11) {
        resto = 0
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false
    }
    else {
        return true
    }
}
const cpf = "05598477181"
console.log(recebeCPF(cpf))

// Exercício 11
type Romanos = {
    letra: string,
    valor: number
}

const numerosRomanos: Romanos [] = [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}
];

function naturaisRomanos (
    teste: number
) {

    let resposta = ''
    if(teste === 0) {
        return ''
    }
    for (let index = 0; index <= numerosRomanos.length; index++){
        if(teste >= numerosRomanos[index]?.valor){
            teste = teste - numerosRomanos[index].valor;
            resposta += numerosRomanos[index].letra
        }
    }
    return resposta
}

const anoTeste = 1990
console.log(naturaisRomanos(anoTeste))