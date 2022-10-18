export class Class {
    private id: string;
    private name: string;
    private module?:string

    constructor(id: string, name: string, module?: string){
        this.id = id,
        this.name = name,
        this.module = module
    }

    getClassId(){
        return this.id
    }

    getClassName(){
        return this.name
    }

    getClassModule(){
        return this.module
    }
}