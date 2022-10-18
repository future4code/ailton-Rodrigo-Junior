import { connection } from "../connection";

export async function searchUserId(id:string) {
    const result = await connection('to_do_list_user').select('*').where({id})

    return result[0]
}