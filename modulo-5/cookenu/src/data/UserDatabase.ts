import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    async getUserByEmail(email: string): Promise<User> {

        try {

            const user = await this.getConnection().select("*").where({ email }).from('cookenu_user');
            return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserById(id: string): Promise<User> {
        try {
            const user = await this.getConnection().select("*").where({ id }).from('cookenu_user')
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async insertUser(user: User): Promise<void> {
        await this.getConnection().insert(user).into(`cookenu_user`)
    }

    async getOtherUser(id: string) {

        try {

            const user = await this.getConnection().select("id", "name", "email").from('cookenu_user').where({ id })
            return User.toUserModel(user[0])


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}