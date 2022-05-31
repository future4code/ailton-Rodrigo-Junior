```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let numeroDeVezes = arrayDeNumeros.filter(item  => item === numeroEscolhido).length
if(numeroDeVezes >= 1){
    return `O número ${numeroEscolhido} aparece ${numeroDeVezes}x`
  }
  else{
    return `Número não encontrado`
  }
}```