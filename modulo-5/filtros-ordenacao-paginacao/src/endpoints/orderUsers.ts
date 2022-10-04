import { connection } from "../data/connection"
import { Request, Response } from "express"

export async function orderUsers (req: Request, res: Response): Promise<void> {
    try {
        let order = req.query.order
        let ordenacao = req.query.ordenacao
        if(!order) {
            order = "email"
        }
        if(!ordenacao) {
            ordenacao = "asc"
        }

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio ORDER BY ${order} ${ordenacao}
        `)
        if(!result[0].length){
            res.statusCode = 404
            throw new Error (`${order} is not a type of user`)
        }

        const user = result[0].map((user: any) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                type: user.type
            }
        })

        res.status(200).send(user)
    } catch (error: any) {
        res.status(error.status || 500).send(error.message || error.sqlMessage)
    }
}