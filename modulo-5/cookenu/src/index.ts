import { app } from "./app";
import { RecipeController } from "./endpoints/RecipeController";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()

// Criar usuário
app.post('/user', userController.createUser)

// Fazer login
app.post('/user/login', userController.userLogin)

// Pegar informações do próprio perfil
app.get('/user', userController.getUserInformation)

// Pegar informações de outro perfil
app.get('/user/:id', userController.getUserById)



const recipeController = new RecipeController()

// Criar receita
app.post('/recipe', recipeController.createRecipe)

// Pegar receita pelo id
app.get('/recipe/:id', recipeController.getRecipe)