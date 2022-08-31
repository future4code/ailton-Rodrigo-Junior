import express, { response } from "express";
import cors from "cors";
import { allUsers, Users, UserType } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1
const users: Users[] = allUsers

app.get("/users", (request, response) => {
    response.send(users)
})

// Exercício 2
app.get("/users/id", (request, response) => {
    try {
        const id: number = Number(request.query.id)
        if (isNaN(id)) {
            throw new Error(`Invalid value for ID, ID must be a number`)
        }
        const user = users.filter((user) => user.id === id)
        if (!user.length) {
            throw new Error(`User not found`)
        }
        response.status(200).send(user)
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

app.get("/users/email", (request, response) => {
    try {
        const email: string = request.query.email as string
        if (!email.length) {
            throw new Error(`Email not found`)
        }
        const user: Users[] | undefined = users.filter((user) => user.email === email)
        if (!user.length) {
            throw new Error(`Email not found`)
        }
        response.send(user)
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

app.get("/users/type", (request, response) => {
    try {
        let type: string = request.query.type as string
        if (type.toLowerCase() === "admin") {
            type = UserType.ADMIN
        }
        if (type.toLowerCase() === "normal") {
            type = UserType.NORMAL
        }
        if (!type.length) {
            throw new Error(`Type not found`)
        }
        const user: Users[] | undefined = users.filter((user) => user.type === type)
        if (!user.length) {
            throw new Error(`Type not found`)
        }
        response.send(user)
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

app.get("/users/age", (request, response) => {
    try {
        const age: number = Number(request.query.age)
        if (isNaN(age)) {
            throw new Error(`Invalid value for age, age must be a number`)
        }
        const user = users.filter((user) => user.age === age)
        if (!user.length) {
            throw new Error(`Age not found`)
        }
        response.send(user)
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

// Exercício 3
app.get("/users/name", (request, response) => {
    try {
        const name: string = request.query.name as string
        if (!name.length) {
            throw new Error(`Email not found`)
        }
        const user: Users[] | undefined = users.filter((user) => user.name === name)
        if (!user.length) {
            throw new Error(`User not found`)
        }
        response.send(user)
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

// Exercício 4
app.post("/users", (request, response) => {
    try {
        let { id, name, email, type, age } = request.body
        if(!id || !name || !email || !type || !age) {
            throw new Error (`Please, verify if your fields are correctly filled`)
        }
        if(typeof id !== "number") {
            throw new Error (`Please, verify if ID is a number`)
        }
        if(typeof age !== "number") {
            throw new Error (`Please, verify if age is a number`)
        }
        if(typeof name !== "string") {
            throw new Error (`Please, verify if age is a string`)
        }
        if(typeof email !== "string") {
            throw new Error (`Please, verify if email is a string`)
        }
        if(type.toLowerCase() !== "admin" && type.toLowerCase() !=="normal") {
            throw new Error(`Please, verify if your type is admin or normal`)
        }
        if(type.toLowerCase() === "admin") {
            type = UserType.ADMIN
        }
        if(type.toLowerCase() === "normal") {
            type = UserType.NORMAL
        }
        const newUser: Users = {
            id, name, email, type, age
        }
        users.push(newUser)
        response.send({message: `User created!`})
    } catch (error: any) {
        response.status(404).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})