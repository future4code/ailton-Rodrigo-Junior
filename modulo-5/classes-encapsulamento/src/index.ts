// Exercício 1
// a) Para que as ações de uma classe sejam executadas. Com a função Constructor.
// b) Apenas uma
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transactions[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getName() {
        return this.name
    } 
  
}

new UserAccount ("022", "Rodrigo", 20)

// c) Através de metodos chamados getters e setters

// Exercício 2
type Transactions = {
    description: string,
    value: number,
    date: string
}

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getValue() {
        return this.value
    }
}

// Exercício 3
class Bank {
    private accounts: UserAccount [];

    constructor (acconuts: UserAccount []) {
        this.accounts = acconuts
    }
}