import { connection } from "../data/connection"
import { Request, Response } from "express"


export const all = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name
        if (!name) {
            name = ""
        }

        let order = req.query.order
        let ordenacao = req.query.ordenacao
        if (!order) {
            order = "email"
        }
        if (!ordenacao) {
            ordenacao = "asc"
        }

        let page = req.query.page
        let productsPerPage = 5
        let offset = productsPerPage * (Number(page) - 1)
        if (!page) {
            page = "1"
        }

        const result = await connection(`aula48_exercicio`)
                                .where("name", "like", `%${name}%`)
                                .orderBy(`${order}`, `${ordenacao}`)
                                .limit(productsPerPage)
                                .offset(offset)
        if (!result.length) {
            res.statusCode = 404
            throw new Error(`Page not found`)
        }

        const user = result.map((user: any) => {
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