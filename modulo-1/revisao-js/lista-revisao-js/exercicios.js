// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros (a,b){
        return a - b;
    }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {  
    let numerosPares = []
    for(let i = 0; i < array.length; i++)
        if (array[i] % 2 === 0){
            numerosPares.push(array[i])
    }
return numerosPares 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for(let i = 0; i < array.length; i++)
        if (array[i] % 2 === 0){
            numerosPares.push(array[i])
    }
    let numerosParesAoQuadrado = []
    for(let i = 0; i < numerosPares.length; i++)
        numerosParesAoQuadrado.push(numerosPares[i]*numerosPares[i])
    return numerosParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    let i = 0
    while (i < array.length){
        if (array[i] > maior){
        maior = array[i]
    }
    i++    
}
return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
        if(num1 >= num2){
        maiorNumero = num1
        }
        else if(num2 > num1){
        maiorNumero = num2
        }
    let maiorDivisivelPorMenor 
        if(num1 >= num2){
            maiorDivisivelPorMenor = num1 % num2 === 0
        }
        else if(num2 > num1){
            maiorDivisivelPorMenor = num2 % num1 === 0
        }
    let diferenca
        if(num1 >= num2){
            diferenca = num1 - num2
        }
        else if(num2 > num1){
            diferenca = num2 - num1
        }
    let objeto ={
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca,
    }
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}