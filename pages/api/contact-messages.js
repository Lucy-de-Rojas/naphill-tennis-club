
import mysql from 'mysql2/promise';

export default async function handler(req, res) {

    
  const mySqlENV = {
    host: '109.156.76.246',
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT),
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
  
}


const connection = await mysql.createConnection(mySqlENV);
const values=[];

const query = `select * from contact`;
const [results] = await connection.execute(query, values);

console.log('result from reading from DB naphill.contact: >>>>> ', results);

    res.json({messages:results});
}