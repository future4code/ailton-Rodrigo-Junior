import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Exercício 1 - Teste de sucesso do método signup da UserBusiness.", async () => {
        const input: ISignupInputDTO = {
            email: "neymar@gmail.com",
            name: "Neymar",
            password: "neymar123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Exercicio 2 - Teste de sucesso do método login da UserBusiness.", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password:"bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })
})