import express, { Express, Request, Response} from "express"
import cors from "cors"
import { User } from "./types"
import { users } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        const {name, CPF, dateOfBirth} = req.body
        const [day, month, year] = dateOfBirth.split('/')
        const dateOfBirth1: Date = new Date(`${year}-${month}-${day}`)
        const ageInMilisseconds: number = Date.now() - dateOfBirth1.getTime()
        const age: number = ageInMilisseconds /1000 /60 /60 /24 /365
        if(age < 18) {
            statusCode = 406
            throw new Error(`You must have at least 18 years old!`)
        }
        const userAlreadyExists = users.filter((user) => {
            return user.CPF === CPF
        })
        if(userAlreadyExists[0]){
            statusCode = 406
            throw new Error(`This user already exists`)
        }

        const newUser: User = {
            name, 
            CPF,
            dateOfBirth: dateOfBirth1,
            balance: 0,
            extract: []
        }

        users.push(newUser)

        res.status(200).send(`Account successfully created!`)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
})

app.get("/users", (req: Request, res: Response) => {
    let statusCode = 500

    try {
        if(!users.length) {
            statusCode = 404
            throw new Error(`No accounts found`)
        }
        res.status(202).send(users)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log("Server is running on port http://localhost:3003")
})