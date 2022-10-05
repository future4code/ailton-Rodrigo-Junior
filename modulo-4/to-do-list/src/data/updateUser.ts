import { connection } from "../connection";

export async function updateUser(
    id: string,
    name?: string,
    nickname?: string,
    email?: string
) {
    if(name){
        await connection.raw(`
        UPDATE to_do_list_user
        SET name = '${name}'
        WHERE id = '${id}'
        `)
    }
    if(nickname){
        await connection.raw(`
        UPDATE to_do_list_user
        SET nickname = '${nickname}'
        WHERE id = '${id}'
        `)
    }
    if(email){
        await connection.raw(`
        UPDATE to_do_list_user
        SET email = '${email}'
        WHERE id = '${id}'
        `)
    }
}