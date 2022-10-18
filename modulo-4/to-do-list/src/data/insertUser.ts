import { connection } from "../connection";
import { User } from "../types";

export async function insertUser(user: User) {
    await connection.insert(user).into('to_do_list_user')
}