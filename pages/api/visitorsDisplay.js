import mysql from 'mysql2/promise';
import { mysqlConnect } from "../../utils/connectDB";



export default async function handler(req, res)  {


    const connection = await mysql.createConnection(mysqlConnect);


    const values = []
    const query = `select * from visitors`;
    const [results] = await connection.execute(query, values);

    console.log('results fropm naphill.visitors:>>>',results);






    res.json({results: results});
}