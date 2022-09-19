import express, {Express} from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import axios from 'axios'

dotenv.config()

const app: Express = express();
app.use(express.json())
app.use(cors());

export const connection = knex ({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

// Exercício 1
// a) https://labenews.herokuapp.com/subscribers
// b) Colocando "Promise<any[]>"
// c)
async function getSubscribers(): Promise <any []> {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    return response.data
} 

// Exercício 2
const getSubs = async (): Promise <any []> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    return response.data
}

// Exercício 3
type user = {
    id: string,
    name: string, 
    email: string
}

// a) Não. 
// b) Pois não se sabe exatamente o que o banco de dados vai retornar.
// c)

const getSub = async (): Promise <user []> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data    
}
getSub()

// Exercício 4
// a) Tipo put
// b)
const createNews = async (
    title: string,
    content: string,
    date: number
): Promise <void> => {
    await axios.put(`https://labenews.herokuapp.com/news`, {
        title,
        content, 
        date
    })
}

// Exercício 5
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.put(`https://labenews.herokuapp.com/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

// Exercício 6
const notifyUsers = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`https://labenews.herokuapp.com/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };


app.listen(3003 || process.env.PORT, () => {
    console.log("Server is running in http://localhost:3003")
})
