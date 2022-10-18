import { Request, Response } from "express";
import { insertTask } from "../data/insertTask";
import { Task } from "../types";


export async function createTask(req: Request, res: Response) {
    let statusCode = 500
    try {
        const {title, description, deadline, author_id} = req.body

        if(!title || !description || !deadline || !author_id){
            statusCode = 400
            throw new Error(`You must fill the blanks 'title, description, deadline, author_id' correctly`)
        }
        if(typeof title !== "string"){
            statusCode = 400
            throw new Error(`title cannot be filled by ${title}`)
        }
        if(typeof description !== "string"){
            statusCode = 400
            throw new Error(`description cannot be filled by ${description}`)
        }
        if(typeof deadline !== "string"){
            statusCode = 400
            throw new Error(`deadline cannot be filled by ${deadline}`)
        }
        if(typeof author_id !== "string"){
            statusCode = 400
            throw new Error(`author_id cannot be filled by ${author_id}`)
        }
        const id:string = Date.now() + Math.random().toString()
        const [day, month, year] = deadline.split('/')
        const date: Date = new Date(`${year}-${month}-${day}`)
        const verifyDate = date.getTime() - Date.now()
        if(verifyDate <= 0 ) {
            statusCode = 400
            throw new Error(`Deadline must be a future date`)
        }
        const task: Task ={
            id,
            title,
            description,
            deadline: date,
            author_id
        }

        await insertTask(task)
        res.status(200).send(`Task has been added successfully!`)
    } catch (error: any) {
        res.status(statusCode).send({message: error.message})
    }
}