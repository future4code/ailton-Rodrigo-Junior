import express from "express"
import cors from "cors"
import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

// 1- a)Temos a resposta completa do banco de dados, com um grande array
// b)

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
    }
})

app.get("/getUsers/:name", async (request, response) => {
    try {
        const name = request.params.name
        const getActorByName = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"`
        )
        response.status(200).send(getActorByName[0])
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// c)
app.get("/users/:gender", async (request, response) => {
    try {
        const gender = request.params.gender
        const getActorByGender = await connection.raw(`
        SELECT COUNT(*) as ${gender} FROM Actor WHERE gender = "${gender}"
        `)
        response.status(200).send(getActorByGender[0])
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 2- a)
app.put("/changeusersalary/:id", async (request, response) => {
    try {
        await connection("Actor")
            .update({
                salary: request.body.salary,
            })
            .where({ id: request.params.id })
        response.send("Salário alterado com sucesso!")
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// b)
app.delete("/deleteuser/:id", async (request, response) => {
    try {
        await connection("Actor")
            .delete()
            .where({ id: request.params.id })
        response.send("Usuário deletado com sucesso!")
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// c)
app.get("/avgsalary/:gender", async(request, response) => {
    try {
       const salaryAvg = await connection("Actor")
        .avg({
            salary: "salary"
        })
        .where({
            gender: request.params.gender
        })
        response.send(`A média salarial do gênero ${request.params.gender} é de ${salaryAvg[0].salary}`)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 3- a)
app.get("/actor/:id",async (request, response) => {
    try {
        const actorById = await connection("Actor")
        .where({
            id: request.params.id
        })
        console.log(actorById[0])
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// b)
app.get("/actorgender", async (request, response) => {
    try {
        const gender = request.query.gender
        const actor = await connection("Actor")
        .count().where({gender: gender})
        response.send(actor[0])
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// 4-
app.post(("/createactor"), async (request, response) => {
    try {
        const {id, name, salary, birth_date, gender} = request.body 
        await connection("Actor").insert({
            id, name, salary, birth_date, gender
        })
        response.send(`Usuário criado com sucesso!`)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})























app.listen(3003 || process.env.PORT, () => {
    console.log("Server is running in http://localhost:3003")
})