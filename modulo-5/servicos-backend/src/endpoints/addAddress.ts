import { Request, Response } from "express"
import { insertAddress } from "../data/insertAddress"
import { requestCEP } from "../services/requestCEP"
import { UserCEP } from "../types/UserCEP"

export async function addAddress(req: Request, res: Response) {
    try {
        const cep = req.params.cep

        if(!cep || cep === ":cep") {
            res.statusCode = 404
            throw new Error("Insert your CEP")
        }

        const consultCEP = await requestCEP(cep)

        if(!consultCEP) {
            res.statusCode = 404
            throw new Error(`Your CEP ${cep} doesn't exist`)
        }

        const addUserCEP: UserCEP = {
            cep: consultCEP.cep,
            logradouro: consultCEP.logradouro,
            numero: "",
            complemento: consultCEP.complemento,
            bairro: consultCEP.bairro,
            cidade: consultCEP.localidade,
            estado: consultCEP.uf
        }
        
        await insertAddress(addUserCEP)
        console.log(consultCEP)
        res.status(201).send("Address has been added!")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage})
    }
}