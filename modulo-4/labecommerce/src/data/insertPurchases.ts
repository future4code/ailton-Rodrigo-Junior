import { connection } from "../connection";
import { Purschase } from "../types/Purchase";


export async function insertPurschases(product: Purschase) {
    await connection(`labecommerce_purchases`).insert(product)
}