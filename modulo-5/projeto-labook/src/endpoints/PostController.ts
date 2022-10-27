import { Request, Response } from "express";
import { PostDatabase } from "../data/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Like, Post } from "../types/Post";
import { USER_ROLES } from "../types/User";

export class PostController {
    async createPost(req: Request, res: Response) {
        let statusCode = 500
        try {

            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error("Token not found!")
            }

            const authenticator = new Authenticator()
            const verifyToken = authenticator.getTokenData(token)
            if (!verifyToken) {
                statusCode = 401
                throw new Error("You are not allowed to do that request!")
            }
            const userId = verifyToken.id

            const { content } = req.body
            if (!content) {
                statusCode = 400
                throw new Error('All posts should have content!')
            }

            const idGenerator = new IdGenerator()
            const postId = idGenerator.generate()

            const post = new Post(postId, content, userId)
            const postDatabase = new PostDatabase()

            await postDatabase.insertPost(post)

            res.status(200).send("Post successfully created!")

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }

    async getAllPosts(req: Request, res: Response) {
        let statusCode = 500
        try {

            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error("Token not found!")
            }

            const authenticator = new Authenticator()
            const verifyToken = authenticator.getTokenData(token)

            if (!verifyToken) {
                statusCode = 401
                throw new Error("You are not allowed to do that request!")
            }

            const postDatabase = new PostDatabase()

            const response = await postDatabase.selectAllPosts()

            res.status(200).send(response)

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }

    async deletePost(req: Request, res: Response) {

        let statusCode = 500
        try {
            const id = req.params.id
            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error("Token not found!")
            }

            const authenticator = new Authenticator()
            const verifyToken = authenticator.getTokenData(token)

            if (!verifyToken) {
                statusCode = 401
                throw new Error("You are not allowed to do that request!")
            }
            const postDatabase = new PostDatabase()
            const post = await postDatabase.getPost(id)
            if (!post) {
                statusCode = 404
                throw new Error("Post not found")
            }

            if (verifyToken.role === USER_ROLES.NORMAL && post.getUserId() !== verifyToken.id) {
                statusCode = 401
                throw new Error("You're not authorized to delete that post!")
            }

            await postDatabase.dropPost(id)

            res.status(200).send("Post deleted!")

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }

    async addLike(req: Request, res: Response) {
        let statusCode = 500
        try {

            const postId = req.params.id
            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error("Token not found!")
            }

            const authenticator = new Authenticator()
            const verifyToken = authenticator.getTokenData(token)

            if (!verifyToken) {
                statusCode = 401
                throw new Error("You are not allowed to do that request!")
            }
            const postDatabase = new PostDatabase()
            const post = await postDatabase.getPost(postId)
            if (!post) {
                statusCode = 404
                throw new Error("Post not found")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const isAlreadyLiked = await postDatabase.findLike(verifyToken.id, postId)
            if (isAlreadyLiked) {
                statusCode = 409
                throw new Error("You already liked that post!")
            }

            const like = new Like(id, postId, verifyToken.id)

            await postDatabase.insertLike(like)

            res.status(200).send("You liked that post!")

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }

    async removeLike(req: Request, res: Response ){
        let statusCode = 500
        try {

            const postId = req.params.id
            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error("Token not found!")
            }

            const authenticator = new Authenticator()
            const verifyToken = authenticator.getTokenData(token)

            if (!verifyToken) {
                statusCode = 401
                throw new Error("You are not allowed to do that request!")
            }
            const postDatabase = new PostDatabase()
            const post = await postDatabase.getPost(postId)
            if (!post) {
                statusCode = 404
                throw new Error("Post not found")
            }

            const isAlreadyLiked = await postDatabase.findLike(verifyToken.id, postId)
            if (!isAlreadyLiked) {
                statusCode = 409
                throw new Error("You didn't liked that post!")
            }

            await postDatabase.dropLike(verifyToken.id, postId)
            

            res.status(200).send("You disliked that post!")

        } catch (error: any) {
            res.status(statusCode).send(error.message)
        }
    }
}