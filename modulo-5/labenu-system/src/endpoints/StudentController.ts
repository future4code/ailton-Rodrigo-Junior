import { Request, Response } from "express";
import { StudentData } from "../data/StudendData";
import { Student } from "../model/Student";


export class StudentController {

    async createStudent(req: Request, res: Response) {

        let statusCode = 500
        try {
            const { id, name, email, birth_date, class_id } = req.body
            if (!id || !name || !email || !birth_date || !class_id) {
                statusCode = 401
                throw new Error(`Fill all the blanks correctly!`)
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

            if(typeof birth_date !== 'string'){
                statusCode = 401
                throw new Error(`birth_date should be a string!`)
            }

            if (typeof class_id !== `string`) {
                statusCode = 401
                throw new Error(`class_id should be a string!`)
            }

            const [day, month, year] = birth_date.split('/')
            const date = new Date(`${year}-${month}-${day}`)

            const student = new Student(id, name, email, date, class_id)
            const studentData = new StudentData()
            await studentData.insertStudent(student)

            res.status(200).send(`Student created successfully!`)            

        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }

    }

    async getStudentByName(req: Request, res: Response){

        let statusCode = 500
        try {
            const name = req.params.name
            const studentData = new StudentData()
            const response = await studentData.selectStudent(name)
            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(statusCode).send({messagse: error.message})
        }
    }

    async changeStudentClass(req: Request, res: Response) {

        let statusCode = 500
        try {
            const id = req.params.id
            const {classId} = req.body

            if(!classId || !id){
                statusCode = 401
                throw new Error(`Fill the blanks correctly!`)
            }

            if(typeof id !== `string`) {
                statusCode = 401
                throw new Error(`id should be a string!`)
            }

            if(typeof classId !== `string`) {
                statusCode = 401
                throw new Error(`classId should be a string!`)
            }


            console.log(id, classId)
            const studentData = new StudentData()
            await studentData.updateStudentClass(classId, id)

            res.status(200).send(`The student class has been changed successfully!`)

        } catch (error: any) {
            res.status(statusCode).send({messagse: error.message})
        }
    }

}
