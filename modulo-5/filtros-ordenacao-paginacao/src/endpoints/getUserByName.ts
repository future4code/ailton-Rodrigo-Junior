import { connection } from "../data/connection"
import { Request, Response } from "express"

// Exercício 1
// a)
export async function getUsersFilteredByName (req: Request, res: Response): Promise<void> {
    try {
        let name = req.query.name
        
        if (!name) {
            name = ""
        }

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio where name like "%${name}%"`
        )

        if(!result[0].length){
            res.statusCode = 404
            throw new Error(`${name} not found.`)
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

// b)
export async function getUsersById (req: Request, res: Response): Promise<void> {
    try {
        let id = req.params.id
        
        if (!id) {
            id = ""
        }

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio where id like "%${id}%"`
        )

        if(!result[0].length){
            res.statusCode = 404
            throw new Error(`${id} not found.`)
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