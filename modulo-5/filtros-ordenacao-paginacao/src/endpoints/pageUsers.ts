import { connection } from "../data/connection"
import { Request, Response } from "express"


export const pageUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let pagina = req.query.pagina
        let productsPerPage = 5
        let offset = productsPerPage * (Number(pagina) -1)


        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio LIMIT ${productsPerPage} OFFSET ${offset}
        `)
        if(!result[0].length){
            res.statusCode = 404
            throw new Error (`Page not found`)
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
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}