// Exercício 1
// let minhaString: string = 10
// a) Não é possível atribuir um número à uma string
// b) É só utilizar o chamado Union type, que é só inserir "number|string" para que seja aceito os dois tipos.
// c)

enum CoresDoArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome: "Rodrigo",
    idade: 26,
    corFavorita: CoresDoArcoIris.VERMELHO
}

const pessoa2: pessoa = {
    nome: "Marina",
    idade: 24,
    corFavorita: CoresDoArcoIris.AMARELO
}

const pessoa3: pessoa = {
    nome: "Larissa",
    idade: 32,
    corFavorita: CoresDoArcoIris.VIOLETA
}

// Exercício 2
// a) e b)
function obterEstatisticas(
    numeros: number []
) {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length -1],
        menor: numerosOrdenados[0],
        media: soma/numeros.length
    }

    return estatisticas
}

// c)

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}

// Exercício 3

type TypePosts = {
    autor: string,
    texto: string
}

const posts: TypePosts [] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levi-o-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!",
    },
    {
        autor: "Lord Valdemort",
        texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor (
    posts: string [],
    autorInformado: string
) {
    return posts.filter((post) => {
        return post.autor === autorInformado
    })
}
