import { UserCEP } from "../types/UserCEP";
import { connection } from "./connection";

export async function insertAddress(user:UserCEP) {
    try {
        await connection().insert(user).into("UserCEP")
    } catch (error: any) {
        console.log(error)
    }
}