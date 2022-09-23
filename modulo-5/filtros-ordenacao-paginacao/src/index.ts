import { app } from "./app";
import { all } from "./endpoints/all";
import { getUsersById, getUsersFilteredByName } from "./endpoints/getUserByName";
import { orderUsers } from "./endpoints/orderUsers";
import { pageUsers } from "./endpoints/pageUsers";

app.get("/user", getUsersFilteredByName)
app.get("/user/:id", getUsersById)
app.get("/order", orderUsers)
app.get("/users", pageUsers)
app.get("/all", all)
