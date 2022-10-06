import { Request, Response } from "express";
import { insertProducts } from "../data/insertProducts";
import { Product } from "../types/Product";


export async function registerProducts(req: Request, res: Response) {
    let statusCode = 500
    try {
        const {name, price, image_url} = req.body
        if(!name || !price || !image_url){
            statusCode = 401
            throw new Error(`You must fill the blanks 'name','price' and 'image_url' with valid valeus!`)
        }
        if(typeof name !== "string"){
            statusCode = 401
            throw new Error(`name cannot be filled by ${name}`)
        }
        if(typeof price !== "number"){
            statusCode = 401
            throw new Error(`Price cannot be filled by ${price}`)
        }
        if(typeof image_url !== "string"){
            statusCode = 401
            throw new Error(`Image_url cannot be filled by ${image_url}`)
        }
        const id = Date.now() + Math.random().toString()
        const product: Product = {
            id,
            name,
            price,
            image_url
        }
        await insertProducts(product)
        res.status(200).send(`The product has been successfully registered!`)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}