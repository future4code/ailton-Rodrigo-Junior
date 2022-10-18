import { connection } from "../connection";

export async function selectUsers(){
    const result = await connection('labecommerce_users').select('*')
    return result
}