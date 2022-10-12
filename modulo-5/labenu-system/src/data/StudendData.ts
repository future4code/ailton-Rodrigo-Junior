import { Student } from "../model/Student";
import BaseDataBase from "./BaseDataBase";


export class StudentData extends BaseDataBase{

    async insertStudent(student: Student){
        await this.getConnection().insert(student).into('labenu_system_student')
    }

    async selectStudent(name: string){
        const response = await this.getConnection().select('*').from('labenu_system_student').where('name', name)
        return response
    }

    async updateStudentClass(newClassId: string, id: string) {
        await this.getConnection().update('class_id', newClassId).from('labenu_system_student').where('id', id)
    }

}