import { connection } from "../connection";
import { Product } from "../types/Product";

export async function insertProducts(product: Product){
    await connection('labecommerce_products').insert(product)
}