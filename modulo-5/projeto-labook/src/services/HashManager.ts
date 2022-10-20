import dotenv from 'dotenv'
import * as bcrypt from 'bcrypt'

dotenv.config()

export class HashManager {

    async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(text, salt)
    }

    async compareHash(text:string, hash: string){
        return bcrypt.compare(text, hash)
    }
}