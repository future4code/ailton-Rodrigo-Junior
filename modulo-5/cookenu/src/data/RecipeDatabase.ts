import { Recipe } from "../types/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    async insertRecipe(recipe: Recipe): Promise<string> {
        await this.getConnection().insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            creation_date: recipe.getCreationDate(),
            user_id: recipe.getUserID()
        }).into('cookenu_recipes')

        return `The recipe ${recipe.getTitle()} created successfully!`
    }

    async getRecipe(id: string) {
        const response = await this.getConnection().select("id", "title", "description", "creation_date").from('cookenu_recipes').where({ id })

        return response
    }
}