import { Request, Response } from "express";
import { ClassData } from "../data/ClassData";
import { Class } from "../model/Class";


class ClassController {

    async createClass(req: Request, res: Response) {

        let statusCode = 500

        try {

            const { id, name } = req.body

            if (!id || !name) {

                statusCode = 401
                throw new Error(`name and id should be filled correctly!`)

            }

            const newClass = new Class(id, name)
            const classData = new ClassData
            const response = await classData.insertClass(newClass)

            res.status(200).send(`New class created!`)

        } catch (error: any) {

            res.status(statusCode).send({ message: error.message })

        }

    }

    async getClass(req: Request, res: Response) {

        let statusCode = 500

        try {

            const classData = new ClassData()
            const response = await classData.selectClass()
            if(!response.length){
                throw new Error(`No classes in database!`)
            }
            res.status(200).send(response)

        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }

    }

    async changeModule(req: Request, res: Response) {

        let statusCode = 500

        try {

            const id = req.params.id 
            const {module} = req.body

            if (!id) {

                statusCode = 401
                throw new Error(`ID must be filled correctly!`)

            }

            if(!module) {

                statusCode = 401
                throw new Error(`module must be filled correctly!`)
            }

            const classData = new ClassData()
            const response = await classData.updateModule(module, id)

            res.status(200).send(`The module has been updated!`)
            

        } catch (error:any) {
            res.status(statusCode).send({ message: error.message })
        }

    }

}

export default ClassController