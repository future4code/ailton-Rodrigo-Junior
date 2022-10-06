import { connection } from "../connection";


export async function selectProductPrice(id: string){
    const response = await connection('labecommerce_products').select('price').where({id})
    return response[0].price
}