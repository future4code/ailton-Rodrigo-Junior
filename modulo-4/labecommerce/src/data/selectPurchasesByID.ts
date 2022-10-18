import { connection } from "../connection";


export async function selectPurchasesByID(id: string) {
    const result = await connection(`labecommerce_purchases`).select('*').where('user_id', '=', id)
    return result[0]
}