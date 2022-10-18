import {app} from "./app"
import { createTask } from "./endpoints/createTask"
import { createUser } from "./endpoints/createUser"
import { editUser } from "./endpoints/editUser"
import { getTaskById } from "./endpoints/getTaskById"
import { getUserById } from "./endpoints/getUserById"

app.post("/user", createUser)
app.get("/user/:id", getUserById)
app.post("/user/edit/:id", editUser)
app.put("/task", createTask)
app.get("/task/:id", getTaskById)