import { Request, Response } from "express";
import { insertUsers } from "../data/insertUsers";
import { User } from "../types/User";


export async function registerUsers(req: Request, res: Response) {
    let statusCode = 500
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            statusCode = 401
            throw new Error (`You must fill the blanks 'name','email' and 'password' with valid valeus!`)
        }
        if(typeof name !== "string") {
            statusCode = 401
            throw new Error(`Name cannot be filled by ${name}`)
        }
        if(typeof email !== "string") {
            statusCode = 401
            throw new Error(`Email cannot be filled by ${email}`)
        }
        if(typeof password !== "string") {
            statusCode = 401
            throw new Error(`Password cannot be filled by ${password}`)
        }
        const id = Date.now() + Math.random().toString()
        const user: User = {
            id,
            name,
            email,
            password
        }
        await insertUsers(user)
        res.status(200).send(`The user has been successfully registered!`)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})        
    }
}