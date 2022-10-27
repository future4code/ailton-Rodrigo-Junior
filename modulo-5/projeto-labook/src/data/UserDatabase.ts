import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    async checkEmail(email: string):Promise<User>{
        try {
            const user = await this.getConnection().select("*").where({email}).from('labook_users')
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async insertUser(user: User): Promise<void>{
        await this.getConnection().insert(user).into('labook_users')
    }
}