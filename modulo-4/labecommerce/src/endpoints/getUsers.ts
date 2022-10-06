import { Request, response, Response } from "express";
import { selectUsers } from "../data/selectUsers";


export async function getUsers(req: Request, res: Response) {
    let statusCode = 500
    try {
        const response = await selectUsers()
        res.status(200).send(response)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}