import { connection } from "../connection";


export async function selectProducts(){
    const response = await connection('labecommerce_products').select('*')
    return response
}