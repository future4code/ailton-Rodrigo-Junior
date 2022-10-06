import { connection } from "../connection";
import { User } from "../types/User";

export async function insertUsers(user: User) {
    await connection('labecommerce_users').insert(user)
}