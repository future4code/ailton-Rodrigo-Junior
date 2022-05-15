// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Altura") 
  let largura = prompt("largura") 
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Insira aqui em que ano estamos")
  let anoDeNascimento = prompt("Insira aqui em que ano você nasceu")
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual é a sua idade?")
  let email = prompt("Qual é o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Insira aqui sua cor favorita")
  let cor2 = prompt("Insira aqui sua segunda cor favorita")
  let cor3 = prompt("Insira aqui sua terceira cor favorita")
  let cores = []
  cores.push(cor1, cor2, cor3)
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    string = string.toUpperCase()
    return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = [array.length] - 1
  return array[ultimoElemento]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array[0]
  array[0] = array[[array.length] - 1]
  array[[array.length] - 1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  return string1.includes(string2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("Em que ano estamos?")
  const anoDeNascimento = +prompt("Em que ano você nasceu?")
  const anoEmissaoDaCarteira = +prompt("Em que ano a sua carteira foi emitida?")
  const idade = anoAtual - anoDeNascimento
  const renovacao = anoAtual - anoEmissaoDaCarteira
  const menosOuIgual20anos = idade <= 20 && renovacao >= 5
  const pessoasEntre20e50anos = 20 < idade && idade <= 50 && renovacao >= 10
  const pessoasComMaisDe50anos = idade > 50 && renovacao >= 15
  const resposta = menosOuIgual20anos || pessoasEntre20e50anos || pessoasComMaisDe50anos
  console.log (resposta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiploDe400 = ano % 400 === 0
  const multiploDe100eNao400 = ano % 100 === 0  && ano % 400 !==0
  const multiploDe4 = ano % 4 === 0 && !multiploDe100eNao400
  const bissexto = multiploDe400 || multiploDe4 
  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Quantos anos você tem?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exlusiva durante os horarios do curso?")
  const verificaIdade = idade.includes("sim")
  const verificaEscolaridade = escolaridade.includes("sim")
  const verificaDisponibilidade = disponibilidade.includes("sim")
  const resposta = verificaIdade && verificaEscolaridade && verificaDisponibilidade
  console.log(resposta)

}