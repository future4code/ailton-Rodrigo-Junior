/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo Blackjack!")
const novaRodada = confirm("Quer iniciar uma nova rodada?")
const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()
const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
if(novaRodada === false) {
   console.log("O jogo acabou.")
}
else {

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`)
}
const vencedor = (num1, num2) =>{
   if(num1 === num2){
      console.log("Empate!")
   }
   else if (num1 > num2){
      console.log("O usuário ganhou!")
   }
   else if(num2 > num1){
      console.log("O computador ganhou!")
   }
   
}
vencedor(pontuacaoUsuario, pontuacaoComputador)