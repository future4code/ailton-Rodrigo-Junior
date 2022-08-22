import express, { request } from "express";
import cors from "cors";
import { toDo, toDos } from "./data";


const app = express();
app.use(cors());
app.use(express.json());


// Exercício 1
app.get("/ping", (request, response) => {
    response.send("Pong! 🏓")
})

// Exercício 2 && 3
const toDo = toDos

// Exercício 4
app.get("/alltasks/:status", (request, response) => {
let status:any = request.params.status
if( status === "done") {
    status = true
}
if( status === "undone") {
    status = false
}
const postStatus = toDo.filter((posts) => {
    return posts.completed === Boolean(status)
})
response.send(postStatus)
})

// Exercício 5
app.post("/newtask", (request, response) => {
    const newTask: toDo = request.body
    console.log(newTask)
    toDo.push(newTask)
    response.send(toDo)
})

// Exercício 6
app.put("/taskstatus/:id", (request, response) => {
    const id = request.params.id
    const completed:any = request.body
    const taskId = toDos.filter((task) => {
        return task.id === Number(id)
    })
    const taskStatus = taskId.filter((task) => {
        task.completed = Boolean({completed})
        return task
    })
    response.send(toDos)
})

// Exercício 7
app.delete("/deletetask/:id", (request, response) => {
    const id = request.params.id
    const deleteTask = toDos.filter((task) => {
        return task.id !== Number(id)
    })
    response.send(deleteTask)
})

// Exercício 8
app.get("/usertasks/:userId", (request, response) => {
    const userId = request.params.userId
    const userTasks = toDos.filter((task) => {
        return task.userId === Number(userId)
    })
    response.send(userTasks)
})

app.listen(3003, () => {
    console.log("Server is running on http://localhost3003/")
})

// Exercício 9 https://documenter.getpostman.com/view/21551917/VUqptda3