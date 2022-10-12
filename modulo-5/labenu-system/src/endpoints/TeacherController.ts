import { Request, Response } from "express";
import { TeacherData } from "../data/TeacherData";
import { Teacher } from "../model/Teacher";


export class TeacherController{

    async createTeacher(req: Request, res: Response) {

        let statusCode = 500
        try {
            const { id, name, email, birth_date, class_id } = req.body
            if (!id || !name || !email || !birth_date || !class_id) {
                statusCode = 401
                throw new Error(`All the blanks should be filled correctly!`)
            }

            if (typeof id !== `string`) {
                statusCode = 401
                throw new Error(`id should be a string!`)
            }

            if (typeof name !== `string`) {
                statusCode = 401
                throw new Error(`name should be a string!`)
            }

            if (typeof email !== `string`) {
                statusCode = 401
                throw new Error(`email should be a string!`)
            }

            if (typeof birth_date !== `string`) {
                statusCode = 401
                throw new Error(`birth_date should be a string!`)
            }
            
            if (typeof class_id !== `string`) {
                statusCode = 401
                throw new Error(`class_id should be a string!`)
            }

            const [day, month, year] = birth_date.split('/')
            const date = new Date(`${year}-${month}-${day}`)

            const teacher = new Teacher(id, name, email, date, class_id)

            const teacherData = new TeacherData()
            await teacherData.insertTeacher(teacher)

            res.status(200).send(`Teacher created successfully!`)

        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }
    }

    async getTeacher(req: Request, res: Response) {
        let statusCode = 500
        
        try {

            const teacherData = new TeacherData()
            const response = await teacherData.selectTeacher()

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }
    }

    async changeTeacherClass(req: Request, res: Response) {
        let statusCode = 500
        try {
            const id = req.params.id
            const {class_id} = req.body

            if(!id || !class_id) {

                statusCode = 401
                throw new Error(`Fill all the blanks correctly!`)
            }

            if(typeof id !== `string`){

                statusCode = 401
                throw new Error(`id should be a string!`)
            }

            if(typeof class_id !== `string`){

                statusCode = 401
                throw new Error(`class_id should be a string!`)
            }

            const teacherData = new TeacherData()
            await teacherData.updateTeacherClass(class_id, id)

            res.status(200).send(`Teacher class has been changed!`)
            
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }
    }
}