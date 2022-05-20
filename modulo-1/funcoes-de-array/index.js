/* 
Exercícios de interpretação de código
1-a) 0 - nome:{"Amanda Rangel", apelido:"Mandi"}
     1 - nome: {"Laís Petra", apelido: "Laura"}
     2 - nome: {"Letícia Chijo", apelido: "Chijo"}
2-
     0 - nome:{"Amanda Rangel", apelido:"Mandi"}
     1 - nome: {"Laís Petra", apelido: "Laura"}
     2 - nome: {"Letícia Chijo", apelido: "Chijo"}
3-
     0 - nome:{"Amanda Rangel", apelido:"Mandi"}
     1 - nome: {"Laís Petra", apelido: "Laura"}

Exercícios de escrita de código
1-a)
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const arrayName = pets.filter((item, index, array) => {
     console.log(item.nome)
 })
// b)
const arrayRacaSalsicha = pets.filter((item,index,array) =>{
    if(item.raca === "Salsicha"){
        console.log(item.nome)
    }
})
// c)
const arrayRacaPoodle = pets.filter((item,index,array) =>{
    if(item.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
    }
})
// 2-a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const arrayNome = produtos.filter ((item,index,array) =>{
     console.log(item.nome)
 })
// b)
const arrayDesconto = produtos.filter ((item,index,array) =>{
    console.log(item.nome, (item.preco * 0.95))
})
// c)
const arrayBebidas = produtos.filter((item,index,array)=>{
    if(item.categoria === "Bebidas"){
        console.log(item.nome)
    }
})
// d)
const arrayYpe = produtos.filter ((item,index,array)=>{
    if(item.nome.includes("Ypê")) {
        console.log(item.nome)
    }
})
// e)
const arrayAnuncioYpe = produtos.filter ((item,index,array)=>{
    if(item.nome.includes("Ypê")) {
        console.log(`Compre ${item.nome} por ${item.preco}`)
    }
})