import { PostBusiness } from "../src/business/PostBusiness"
import { ICreatePostInputDTO, IGetPostsInputDTO, IPostDB } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Exercício 3 - Teste de sucesso do método createPost da PostBusiness.", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-admin",
            content: "Olha ele aí!"
        }
        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso")
    })
    
    test("Exercício 4 - Teste de sucesso do método getPosts da PostBusiness.", async () => {
        const input: IGetPostsInputDTO = {token:"token-mock-normal"}
        const response = await postBusiness.getPosts(input)
        expect(response)
    })
})