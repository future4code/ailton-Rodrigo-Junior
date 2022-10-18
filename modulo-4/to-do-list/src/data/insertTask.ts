import { connection } from "../connection";
import { Task } from "../types";

export async function insertTask(task: Task) {
    await connection.insert(task).into('to_do_list_tasks')
}