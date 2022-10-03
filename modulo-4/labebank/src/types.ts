export type Transaction ={
    value: number,
    date: Date,
    description: string
}

export type User = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    extract: Transaction []
}