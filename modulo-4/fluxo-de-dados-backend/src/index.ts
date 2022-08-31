import express from "express"
import cors from "cors"
import { Products, productList, uid } from "./data";

const app = express();
app.use(cors());
app.use(express.json())

// Exercício 1
app.get("/test", (request, response) => {
    response.send("A API está funcional!")
})

// Exercício 2
const products: Products[] = productList

// Exercício 3 && Exercício 7
type Details = {
    name: string,
    price: number
}
app.post("/newproduct", (request, response) => {
    try {
        const productDetails: Details = request.body
        if (!productDetails.name && !productDetails.price) {
            throw new Error(`Nenhum argumento foi recebido!`)
        }
        else if (!productDetails.name) {
            throw new Error(`O nome do produto não é válido!`)
        }
        else if (typeof productDetails.name !== "string") {
            throw new Error(`O nome do produto não é válido!`)
        }
        else if (!productDetails.price) {
            throw new Error(`O preço do produto não é válido!`)
        }
        else if (typeof productDetails.price !== "number") {
            throw new Error(`O preço do produto deve ser um número!`)
        }
        else if (productDetails.price < 0) {
            throw new Error(`Não é possível registrar um preço negativo!`)
        }
        const productDetailsId = { id: uid(), ...productDetails }
        const newProduct = products.push(productDetailsId)
        response.send(products)
    } catch (error: any) {
        response.status(404).send({ message: error.message|| `Algo inesperado aconteceu`})
    }
})

// Exercício 4
app.get("/products", (request, reponse) => {
    reponse.send(products)
})

// Exercício 5 && Exercício 8
type Price = {
    price: number
}
app.put("/editproductprice/:id", (request, response) => {
    try {
        let id = request.params.id
        const newPrice: Price = request.body
        
        if (!newPrice.price) {
            throw new Error(`Não é possível modificar o preço desse item!`)
        }
        else if (typeof newPrice.price !== "number") {
            throw new Error(`O preço deve ser um número!`)
        }
        else if (newPrice.price < 0) {
            throw new Error(`O preço não pode ser menor do que 0!`)
        }
        
        const searchProduct = products.filter((products) => {
            return products.id.includes(id)
        })
        if (!id.length) {
            throw new Error(`O ID não foi encontrado`)
        }
        if (!searchProduct.length) {
            throw new Error(`O ID não foi encontrado`)
        }

        const editProduct = searchProduct.filter((product) => {
            product.price = newPrice.price
            return searchProduct
        })
        response.send(editProduct)
    } catch (error: any) {
        response.status(404).send({ message: error.message || `Algo inesperado aconteceu`})
    }
})

// Exercício 6 && Exercício 9
app.delete("/deleteproduct/:id", (request, response) => {
    try {
        const id = request.params.id
        if(!id.length) {
            throw new Error (`Id do produto não encontrado!`)
        }
        const name = request.body.name
        if(!name) {
            throw new Error (`Nome do produto não encontrado!`)
        }
        const errorList = products.filter((products) => {
            return products.name === name})
        if (!errorList.length) {
            throw new Error (`Nome do produto nao encontrado`)
        }
        const newList = products.filter((products) => {
            return !products.name.includes(name)
        })
        response.send(newList)
    } catch (error: any) {
        response.status(404).send({message: error.message})
    }

})


app.listen(3003, () => {
    console.log("Server is running on http://localhost:3003")
})