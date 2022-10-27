import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { User } from "../types/User";

export class UserController {
    async createUser(req: Request, res: Response) {

        let statusCode = 500
        try {

            const {name, password, email, role} = req.body
            if(!name || !password || !email || !role){
                statusCode = 401
                throw new Error(`The fields should be completed correctly!`)
            }

            if(typeof name !== `string`){
                statusCode = 401
                throw new Error(`The fiel 'name' should be fillered with a string!`)
            }
            if(typeof password !== `string`){
                statusCode = 401
                throw new Error(`The fiel 'password' should be fillered with a string!`)
            }
            if(typeof email !== `string`){
                statusCode = 401
                throw new Error(`The fiel 'email' should be fillered with a string!`)
            }

            const userDatabase = new UserDatabase()

            const checkEmail = await userDatabase.getUserByEmail(email)
            if(checkEmail){
                statusCode = 409
                throw new Error(`The email ${email} already exists!`)
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)

            const user: User = new User(id, name, hashPassword, email, role)

            await userDatabase.insertUser(user)

            const authenticator = new Authenticator()
            const token = authenticator.generate({id, role})
            
            res.status(200).send({message: 'User has been created successfully', token})
    
        } catch (error: any) {
            res.status(statusCode).send({message: error.message})
        }
    }
    async userLogin(req: Request, res: Response) {

        let statusCode = 500
        try {

            const {email, password} = req.body
            if(!email || !password ){
                statusCode = 401
                throw new Error(`The fields should be completed correctly!`)
            }

            if(typeof email !== `string`){
                statusCode = 401
                throw new Error(`The fiel 'email' should be fillered with a string!`)
            }

            if(typeof password !== `string`){
                statusCode = 401
                throw new Error(`The fiel 'password' should be fillered with a string!`)
            }

            const userDatabase = new UserDatabase()
            const user = await userDatabase.getUserByEmail(email)

            if(!user){
                statusCode = 409
                throw new Error(`Email ou senha incorretos!`)
            }

            const hashManager = new HashManager()
            const correctPassword = await hashManager.compareHash(password, user.getPassword())
            if(!correctPassword){
                statusCode = 401
                throw new Error('Email ou senha incorretos')
            }

            const authenticator = new Authenticator()
            const token = authenticator.generate({id:user.getId(), role: user.getRole()})
            
            res.status(200).send({message: 'User logged successfully!', token})
    
        } catch (error: any) {
            res.status(statusCode).send({message: error.message})
        }
    }

    async getUserInformation (req: Request, res: Response) {

        let statusCode = 500
        try {

            const token = req.headers.authorization

            if(!token) {
                statusCode = 422
                throw new Error('An authorization should be passed in headers!')
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token)
            if(!tokenData){
                statusCode = 401
                throw new Error('A valid token should be passed!')
            }

            const userDatabase = new UserDatabase()
            const user = await userDatabase.getUserById(tokenData.id)
            const response = {
                id: user.getId(),
                email: user.getEmail()
            }

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(statusCode).send({message: error.message})
        }
    }

    async getUserById(req: Request, res: Response){
        let statusCode = 500

        try {
            const id = req.params.id
            if(!id){
                statusCode = 402
                throw new Error("This id is not valid")
            }

            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error('This token is not valid')
            }

            const authenticator = new Authenticator
            const authenticatorId = authenticator.getTokenData(token)

            if(!authenticatorId){
                statusCode = 404
                throw new Error("You are not allowed to do that request!")
            }

            const userDatabase = new UserDatabase()
            const response = await userDatabase.getOtherUser(id)

            const user = {
                id: response.getId(),
                name: response.getName(),
                email: response.getEmail()
            }

            res.status(200).send(user);
            
            
        } catch (error:any) {
            res.status(statusCode).send({message: error.message})
        }

    }
}