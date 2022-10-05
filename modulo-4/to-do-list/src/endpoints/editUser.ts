import { Request, Response } from "express";
import { searchUserId } from "../data/searchUserId";
import { updateUser } from "../data/updateUser";

export async function editUser(req: Request, res: Response) {
    let statusCode = 500
    try {
        const id = req.params.id
        const user = searchUserId(id)
        if(!user){
            statusCode = 404
            throw new Error(`ID not found`)
        }
        const {name, nickname, email} = req.body
        if(name === "" || nickname === "" || email === ""){
            statusCode = 400
            throw new Error(`You must fill all the blanks!`) 
        }
        if(!name && !nickname && !email){
            statusCode = 400
            throw new Error(`Choose at least one value to edit!`) 
        }

        await updateUser(id, name, nickname, email)
        res.status(200).send(`User updated!`)


    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}