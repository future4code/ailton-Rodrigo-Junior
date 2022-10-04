import { ILikeDB, IPostDB, Post } from "../../src/models/Post"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => { }

    public getPosts = async (): Promise<IPostDB[]> => {
        const posts: IPostDB[] = [
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
                user_id: "id-mock"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "id-mock"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "id-mock"
            },
            {
                id: "204",
                content: "Hexa tá chegando!",
                user_id: "id-mock"
            }
        ]
        return posts
    }

    public getLikes = async (postId: string): Promise<number> => {
        if (postId === "201") return 0

        return 5
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        return undefined
    }

    public deletePost = async (postId: string): Promise<void> => { }

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        return undefined
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => { }

    public removeLike = async (postId: string, userId: string): Promise<void> => { }
}