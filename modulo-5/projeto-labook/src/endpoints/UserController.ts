import { hash } from "bcrypt";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User, USER_ROLES } from "../types/User";

export class UserController {
    async userSignup(req: Request, res: Response) {
        let statusCode = 500
        try {

            const { name, email, password, role } = req.body
            if (!name || !email || !password) {
                statusCode = 402
                throw new Error(`All the fields ('name', 'email' and 'password') should be filled!`)
            }

            if (typeof name !== "string") {
                statusCode = 401
                throw new Error(`The field 'name' should be a string!`)
            }

            if (typeof email !== "string") {
                statusCode = 401
                throw new Error(`The field 'email' should be a string!`)
            }

            if (typeof password !== "string") {
                statusCode = 401
                throw new Error(`The field 'password' should be a string!`)
            }

            const userDatabase = new UserDatabase()
            const checkEmail = await userDatabase.checkEmail(email)
            if (checkEmail) {
                statusCode = 409
                throw new Error(`${email} already exists in our database!`)
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const hashManager = new HashManager()
            const hashedPassword = await hashManager.hash(password)

            const user: User = new User(id, name, email, hashedPassword, role)
            await userDatabase.insertUser(user)

            const authenticator = new Authenticator()
            const token = authenticator.generate({ id, role })

            res.status(200).send(`${name} has been created successfully!
        token: ${token}`)

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }
    async userLogin(req: Request, res: Response){
        let statusCode = 500
        try {

            const {email, password} = req.body

            if (!email || !password) {
                statusCode = 402
                throw new Error(`All the fields ('name', 'email' and 'password') should be filled!`)
            }

            if (typeof email !== "string") {
                statusCode = 401
                throw new Error(`The field 'email' should be a string!`)
            }

            if (typeof password !== "string") {
                statusCode = 401
                throw new Error(`The field 'password' should be a string!`)
            }
            
            const userDatabase = new UserDatabase()
            const user = await userDatabase.checkEmail(email)

            if(!user){
                statusCode = 401
                throw new Error(`Wrong email or wrong password!`)
            }

            const hashManager = new HashManager()
            const correctPassword = await hashManager.compareHash(password, user.getPassword())

            if(!correctPassword){
                statusCode = 401
                throw new Error(`Wrong email or wrong password!`)
            }

            const authenticator = new Authenticator()
            const token = authenticator.generate({id: user.getId(), role: user.getRole() as USER_ROLES})
            
            res.status(200).send(`Login Successfully! 
            Token: ${token}`)
            
        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }
}