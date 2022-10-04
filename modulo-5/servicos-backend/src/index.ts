import { app } from "./app";
import { addAddress } from "./endpoints/addAddress";


app.post("/addAddress/:cep", addAddress)