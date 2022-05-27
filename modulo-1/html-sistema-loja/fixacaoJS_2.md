function calculaPrecoTotal(quantidade) {
  var preco 
  if(quantidade >= 12){
    preco = 1
  }
  else if (quantidade < 12){
    preco = 1.3
  }
  precoTotal = quantidade * preco
  return precoTotal
}