export class Student {

    private id: string;
    private name: string;
    private email: string;
    private birth_date: Date;
    private class_id: string;

    constructor(id: string, name: string, email: string, birth_date: Date, class_id: string){
        this.id = id,
        this.name = name,
        this.email = email,
        this.birth_date = birth_date,
        this.class_id = class_id
    }

    getId(){
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail(){
        return this.email
    }

    getBirthDate(){
        return this.birth_date
    }

    getClassId() {
        return this.class_id
    }

}