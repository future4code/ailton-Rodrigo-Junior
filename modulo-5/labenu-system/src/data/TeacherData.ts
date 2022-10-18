import { Teacher } from "../model/Teacher";
import BaseDataBase from "./BaseDataBase";

export class TeacherData extends BaseDataBase {

    async insertTeacher(teacher: Teacher){
        await this.getConnection().insert(teacher).into(`labenu_system_teacher`)
    }

    async selectTeacher(){
        const response = await this.getConnection().select(`*`).from(`labenu_system_teacher`)
        return response
    }

    async updateTeacherClass(class_id: string, id: string){
        await this.getConnection().update(`class_id`, class_id).where(`id`, id).from(`labenu_system_teacher`)
    }

}