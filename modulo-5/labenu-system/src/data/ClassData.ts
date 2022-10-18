import { Class } from "../model/Class";
import BaseDataBase from "./BaseDataBase";

export class ClassData extends BaseDataBase {

    async insertClass(newClass: Class) {

        await this.getConnection().insert(newClass).into('labenu_system_class')

    }

    async selectClass() {

        const response = await this.getConnection().select('*').from('labenu_system_class')
        return response
    }

    async updateModule(module: string, id: string) {

        await this.getConnection().where(`id`, id).update('module', module).from('labenu_system_class')
    }

}