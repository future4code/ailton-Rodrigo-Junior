import { Like, Post } from "../types/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    async insertPost(post: Post): Promise<void> {
        await this.getConnection().insert(post).into('labook_posts')
    }

    async selectAllPosts() {
        const response = await this.getConnection().select("*").from('labook_posts')
        return response
    }

    async getPost(id: string): Promise<Post> {
        const response = await this.getConnection().select("*").from('labook_posts').where({ id })
        return response[0] && Post.toPostModel(response[0])
    }

    async dropPost(id: string) {
        await this.getConnection().delete("*").from('labook_posts').where({ id })

    }

    async findLike(userId: string, postId: string) {
        const response = await this.getConnection().select("*").from('labook_likes').where({ user_id: userId }).andWhere({ post_id: postId })
        return response[0]
    }

    async insertLike(like: Like) {
        await this.getConnection().insert(like).into('labook_likes')
    }

    async dropLike(userId: string, postId: string) {
        await this.getConnection().delete().from('labook_likes').where({ user_id: userId }).andWhere({ post_id: postId })
    }
}