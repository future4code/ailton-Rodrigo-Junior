import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from "../types/User";
import dotenv from 'dotenv'

dotenv.config()

export interface AuthenticationData{
    id: string,
    role: USER_ROLES
}

export class Authenticator{
    generate(input: AuthenticationData){
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })

        return token
    }

    getTokenData(token: string): AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as AuthenticationData
    }
}