import { Request, Response } from "express"
import { selectPurchasesByID } from "../data/selectPurchasesByID"

export async function getPurchases(req: Request, res: Response) {
    let statusCode = 500
    try {
        const id = req.params.user_id
        const response = await selectPurchasesByID(id)
        res.status(200).send(response)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}