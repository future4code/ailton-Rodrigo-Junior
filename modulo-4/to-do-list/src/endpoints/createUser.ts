import { Request, Response } from "express";
import { User } from "../types";
import { insertUser } from "../data/insertUser";

export async function createUser(req: Request, res: Response) {
        let statusCode = 500
        try {
            const {name, nickname, email} = req.body
    
            if(!name||!nickname||!email){
                statusCode = 400
                throw new Error(`You must fill the blanks 'name, nickname, email' correctly`)
            }
            if(typeof name !== "string"){
                statusCode = 400
                throw new Error(`Name cannot be filled by ${name}`)
            }
            if(typeof nickname !== "string"){
                statusCode = 400
                throw new Error(`Nickname cannot be filled by ${nickname}`)
            }
            if(typeof email !== "string"){
                statusCode = 400
                throw new Error(`Email cannot be filled by ${email}`)
            }
            const id:string = Date.now() + Math.random().toString()
            const user: User ={
                id,
                name,
                nickname,
                email
            }
    
            await insertUser(user)
            res.status(200).send(`User has been added successfully!`)
        } catch (error: any) {
            res.status(statusCode).send({message: error.message})
        }
}