export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export enum STATUS {
    toDo = "TO_DO",
    doing = "DOING",
    done = "DONE"
}

export type Task = {
    id: string,
    title: string,
    description: string,
    deadline: Date,
    author_id:string
}