describe("Testes de Jest", ()=> {
    

    const verificaPar = (num: number) => {
        if(num % 2 === 0) {
            return true
        }
        else {
            return false
        }
    }

    test("Exercício 0 - Verificação se um número é par", ()=> {
        expect(verificaPar(112)).toBe(true)
    })


    const caixaAlta = (word: string) => {
        return word.toUpperCase()
    }

    test("Exercício 1 - String caixa alta", () => {
        expect(caixaAlta("bananinha")).toContain("BANANINHA")
    })


    const separa = (word: string): string[] => {
        return word.split("")
    }

    test("Exercício 2 - Separa palavra", () => {
        expect(separa("dev")).toEqual(["d", "e", "v"])
    })


    const stringToNum = (num:string):number => {
        return Number(num)
    }

    test("Exercício 3 - Transforma em Number", () => {
        expect(stringToNum("50")).toBe(50)
    })


    const letterNumbers = (word: string): number => {
        return word.length
    }

    test("Exercício 4 - Número de letras", () => {
        expect(letterNumbers("jest")).toBe(4)
    })


    const randomNumber = (): number => {
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1
    }

    test("Exercício 5 - Número Aleatório", () => {
        expect(randomNumber()).toBeGreaterThanOrEqual(0)
    })


    interface UserInterface{
        name: string,
        age: number
    }

    const User: UserInterface[] = [
        {
            name: "Astrodev",
            age: 20
        },
        {
            name: "Cris",
            age: 40
        },
        {
            name: "Ronaldo",
            age: 37
        },
        {
            name: "Messi",
            age: 35
        },
        {
            name: "Neymar",
            age: 30
        }
    ]

    test("Exercício 6 - Astrodev no array", () => {
        const user:UserInterface = {
            name: "Astrodev",
            age: 20
        }
        expect(User).toContainEqual(user)
    })

    const mediaArredondada = (list: number[]): number => {
        let total = 0

        for (let n of list) {
            total += n
        }
        const media = Math.ceil(total/list.length)
        return media
    }

    test("Exercício 7 - Média arredondada", () => {
        expect(mediaArredondada([10, 4, 7, 6])).toBe(7)
    })


    const anoNascimento = (ano: number): number => {
        const anoAtual = new Date().getFullYear()
        const idade = anoAtual - ano
        return idade
    }

    test ("Exercício 8 - Idade Atual", () => {
        expect(anoNascimento(2000)).toBe(22)
    })


    const formataData = (data: string): string => {
        const date = new Date(data)
        const dataFinal = date.toLocaleDateString()
        return dataFinal
    }

    test("Exercício 9 - Formatar data", () => {
        expect(formataData("2022/09/27")).toBe("27/09/2022")
    })
})