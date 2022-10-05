import { Request, Response } from "express";
import { searchUserId } from "../data/searchUserId";

export async function getUserById(req: Request, res: Response) {
    let statusCode = 500
    try {
        const id = req.params.id
        const response = await searchUserId(id)
        if(!response){
            statusCode = 404
            throw new Error(`ID not found`)
        }
        res.status(200).send({id: response.id, nickname: response.nickname})
        
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}