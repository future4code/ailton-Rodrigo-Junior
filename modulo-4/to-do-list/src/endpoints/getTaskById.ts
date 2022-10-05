import { Request, Response } from "express";
import { searchTaskId } from "../data/searchTaskId";

export async function getTaskById(req: Request, res: Response){

    let statusCode = 500

    try {
        
        const id = req.params.id
        if(!id || id === ":id"){
            statusCode = 401
            throw new Error(`You must use a true ID`)
        }

        const response = await searchTaskId(id)
        if(!response) {
            statusCode = 404
            throw new Error(`id: '${id}' was not found`)
        }

        res.status(200).send(response)

    } catch (error: any) {

        res.status(statusCode).send({message: error.message})
    }
}