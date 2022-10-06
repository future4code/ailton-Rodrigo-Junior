import { Request, Response } from "express";
import { selectProducts } from "../data/selectProducts";


export async function getProducts(req: Request, res: Response) {
    let statusCode = 500
    try {
        const response = await selectProducts()
        res.status(200).send(response)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}