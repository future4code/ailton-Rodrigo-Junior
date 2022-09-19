import { v4 } from "uuid"
import express, { Express, request, response } from "express"
import cors from "cors"
import knex from "knex"
import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const app: Express = express();
app.use(express.json());
app.use(cors());
// Exercício 1
// a) Sim, pois com strings conseguimos misturar números com letras, dificultando que uma id seja repetida.            
// b)
const generateID = () => {
    return v4()
}

const id = generateID()

console.log("Generated Id: ", id);

// Exercício 2
// a) a const "userTableName" é pra manter fixa o nome da tabela no mysql, a "connection", pra estabelecer conexãp com o mysql, e a "createUser" pra inserir na tabela do mysql um user.


// b)   CREATE TABLE user (
//     id VARCHAR(255) PRIMARY KEY,
//     email  VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
// )
// c)
const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

const userTableName = "User";

const createUser = async (
    id: string,
    email: string,
    password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(userTableName);
};

// Exercício 3
// a) Faz com que a gente meio que garanta para a função que o JWT_KEY será uma string. Porque o código irá quebrar.
// b)
const expiresIn = "1min"
const generateToken = (id: string): string => {
    const token = jwt.sign(
        {
            id: id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
}
console.log(generateToken);

// Exercicio 4
app.post("/user/signup", async (req, res) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }
        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        const id: string = generateID()
        await createUser(id, userData.email, userData.password)
        const token = generateToken(id)
        res.status(200).send({ token })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 5
const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email })
    return result[0]
}

// Exercício 6
app.post("/user/login", async (req, res) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid Email")
        }
        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await getUserByEmail(userData.email)
        if (user.password !== userData.password) {
            throw new Error("Invalid password")
        }
        const token = generateToken(user.id)
        res.status(200).send(`${token} : token gerado pelo jwt`)

    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
})

// Exercício 7
const verifyToken = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id
    }
    return result
}

// Exercício 8
const getUserById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where(id)

    return result[0]
}

app.get("/user/profile", async (req, res) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = verifyToken(token)
        const user = await getUserById(authenticationData.id)
        res.status(200).send({
            id: user.id,
            email: user.email
        })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})




app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});