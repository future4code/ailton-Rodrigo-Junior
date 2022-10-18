import { connection } from "../connection";

export async function searchTaskId(id:string) {
    const result = await connection('to_do_list_tasks').select('*').where({id})

    return result[0]
}