import { app } from "./app";
import { getProducts } from "./endpoints/getProducts";
import { getPurchases } from "./endpoints/getPurchases";
import { getUsers } from "./endpoints/getUsers";
import { registerProducts } from "./endpoints/registerProducts";
import { registerPurchases } from "./endpoints/registerPurchases";
import { registerUsers } from "./endpoints/registerUsers";

// Cadastro de Usuários
app.post("/users", registerUsers)

// Busca por todos os usuários
app.get("/users", getUsers)

// Cadastro de Produtos
app.post(`/products`, registerProducts)

// Busca por todos os Produtos
app.get('/products', getProducts)

// Registro de compra
app.post('/purchases', registerPurchases)

// Buscar todas as compras
app.get('/users/:user_id/purchases', getPurchases)