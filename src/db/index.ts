import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    connectionString : process.env.DATABASE_URL
})

pool.on('connect', () =>{
    console.log('Conectado');
})

const query = (text : string,params : Array<string>) => pool.query(text,params)

export {query}