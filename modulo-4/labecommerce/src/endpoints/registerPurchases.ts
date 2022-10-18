import { Request, Response } from "express";
import { insertPurschases } from "../data/insertPurchases";
import { selectProductPrice } from "../data/selectProductPrice";
import { Purschase } from "../types/Purchase";


export async function registerPurchases(req: Request, res: Response) {
    let statusCode = 500
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            statusCode = 401
            throw new Error(`You must fill the blanks 'user_id','product_id' and 'quantity' with valid valeus!`)
        }
        if (typeof user_id !== "string") {
            statusCode = 401
            throw new Error(`${user_id} is not a valid user_id`)
        }
        if (typeof product_id !== "string") {
            statusCode = 401
            throw new Error(`${product_id} is not a valid product_id`)
        }
        if (typeof quantity !== "number") {
            statusCode = 401
            throw new Error(`${quantity} is not a valid quantity`)
        }

        const id = Date.now() + Math.random().toString()
        const total_price = await selectProductPrice(product_id) * quantity
        const purchase: Purschase = {
            id,
            quantity,
            total_price,
            user_id,
            product_id
        }
        await insertPurschases(purchase)
        res.status(200).send(`Your product has been purchased successfully!`)
    } catch (error: any) {
        res.status(statusCode).send({ message: error.message })
    }
}