import { app } from "./app";
import { PostController } from "./endpoints/PostController";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()

// Exercício 1
app.post('/signup', userController.userSignup)

// Exercício 2
app.post('/login', userController.userLogin)



const postController = new PostController()

// Exercício 3
app.post('/post', postController.createPost)

// Exercício 4
app.get('/post', postController.getAllPosts)

// Exercício 5
app.delete('/post/:id', postController.deletePost)

// Exercício 6
app.post('/like/:id', postController.addLike)

// Exercício 7
app.delete('/dislike/:id', postController.removeLike)