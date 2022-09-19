import * as bcrypt from "bcryptjs"
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
// a) Rounds é o tempo que ele vai ter pra fazer o algoritmo de criptografia. O salt é o que gera o salto da criptografia.
// b)
async function generateHash(password: string) {
    const cost = 12
    const salt = bcrypt.genSaltSync(cost)
    const hash = await bcrypt.hash(password,salt)
    return hash
}

// c)
async function compareHash(password:string, hash: string) {
    return bcrypt.compare(password, hash)
}

// Exercício 2
// a) O cadastro, pois é necessário que a senha criptografada esteja no banco de dados para que ela seja comparada.
// b)
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

const generateID = () => {
    return v4()
}

const userTableName = "User";

const createUser = async (
    id: string,
    email: string,
    password: string,
    role: string) => {
    await connection
        .insert({
            id,
            email,
            password,
            role
        })
        .into(userTableName);
};

const expiresIn = "1min"
const generateToken = (id: string, role: string): string => {
    const token = jwt.sign(
        {
            id: id,
            role: role,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
}

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
            password: req.body.password,
            role: req.body.role
        }
        const id: string = generateID()
        const hashPassword = await generateHash(userData.password)
        await createUser(id, userData.email, hashPassword, userData.role)
        const token = generateToken(id, userData.role)
        res.status(200).send({ token })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

const verifyToken = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id,
        role: payload.role,
    }
    return result
}


const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email })
    return result[0]
}

app.post("/user/login", async (req, res) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid Email")
        }
        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        const user = await getUserByEmail(userData.email)

        const comparePassword = await compareHash(userData.password, user.password)
        if (!comparePassword) {
            throw new Error("Invalid password");
          }
        const token = generateToken(user.id, userData.role)
        res.status(200).send(`${token} : token gerado pelo jwt`)

    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
})

const getUserById = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where(id)

    return result[0]
}

// Exercício 4
app.get("/user/profile", async (req, res) => {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = verifyToken(token)
        if(authenticationData.role !== "normal") {
            throw new Error("Only a normal user can access this funcionality");
        }
        const user = await getUserById(authenticationData.id);
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role,
          });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
})








app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});