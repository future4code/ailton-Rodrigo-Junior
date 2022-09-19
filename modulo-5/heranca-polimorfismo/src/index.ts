// Herança
// Exercício 1
// a) Não, pois é uma propriedade "private".
// b) Apenas 1.
class User {
    private id: string
    private email: string
    private name: string
    private password: string

    constructor(id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const newUser = new User("001", "user@user.com", "User", "123456")

// Exercício 2
// a) Apenas 1
// b) Apenas 1, pois ele é chamado na class Costumer
class Costumer extends User {
    public creditCard: string
    private totalPurchase: number = 0

    constructor(id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string,
        totalPurchase: number
    ) {
        console.log("Chamando o construtor da classe Customer");
        super(id, email, name, password)
        this.creditCard = creditCard
        this.totalPurchase = totalPurchase
    }
}

const newCostumer = new Costumer("001", "user@user.com", "User", "123456", "7169552898741254", 5)

// Exercício 3
console.log(newUser.getEmail(), newUser.getId(), newUser.getName())
console.log(newCostumer.creditCard, newCostumer.getEmail(), newCostumer.getId(), newCostumer.getName())
// a) Não, pois é uma propriedade "private".

// Exercício 4 e 5
console.log(newCostumer.introduceYourself())

// Polimorfismo
// Exercício 1
// a) Todas foram possíveis, pois todas são públicas
interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
}

class Client1 implements Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    constructor(name: string, registrationNumber: number, consumedEnergy: number) {
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
    }
    calculateBill(): number {
        return 2
    }
}

const newClient = new Client1("User", 1, 1)
console.log(newClient.calculateBill(), newClient.consumedEnergy, newClient.name, newClient.registrationNumber)

// Exercício 2
// a)'Cannot create an instance of an abstract class.'
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// b) Fazer com que ela não seja abstrata

// Exercício 3
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

const newResidence = new Residence(5, "71912500")
console.log(newResidence.getCep())

const newCommerce = new Commerce(2, "87998500")
console.log(newCommerce.getCep())

const newIndustry = new Industry(15, "54123570")
console.log(newIndustry.getCep())

// Exercício 4
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }
    getCpf(): string {
        return this.cpf
    }
    calcularConta(): number {
        return this.consumedEnergy * 0.75
    }
}

// Exercício 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }
    getCnpj(): string {
        return this.cnpj
    }
    getBill(): number {
        return this.consumedEnergy * 0.53
    }
}

// Exercício 6
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }
    getCnpj(): string {
        return this.cnpj
    }
    getBill(): number {
        return this.consumedEnergy * 0.45
    }
}