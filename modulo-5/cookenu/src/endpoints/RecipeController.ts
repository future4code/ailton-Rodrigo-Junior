import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { Recipe } from "../types/Recipe";

export class RecipeController {
    async createRecipe(req: Request, res: Response) {
        let statusCode = 500

        try {

            const token = req.headers.authorization
            if (!token) {
                statusCode = 404
                throw new Error('This token is not valid')
            }

            const { title, description } = req.body
            if (!title || !description) {
                statusCode = 401
                throw new Error('')
            }

            const authenticator = new Authenticator()
            const authenticatorId = authenticator.getTokenData(token)
            if(!authenticatorId){
                statusCode = 404
                throw new Error("You are not allowed to do that request!")
            }
            const userId = authenticatorId.id

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const creationDate = new Date()

            const recipe: Recipe = new Recipe(id, title, description, creationDate, userId)

            const recipeDatabase = new RecipeDatabase()

            const response = await recipeDatabase.insertRecipe(recipe)

            res.status(200).send(response)            

        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }
    }

    async getRecipe(req: Request, res: Response){
        let statusCode = 500

        try {

            const id = req.params.id
            if(!id){
                statusCode = 402
                throw new Error("This id is not valid")
            }

            const recipeDatabase = new RecipeDatabase()
            const response = await recipeDatabase.getRecipe(id)

            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(statusCode).send({ message: error.message })
        }
    }
}