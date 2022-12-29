
import mysql from 'mysql2/promise';
import { mysqlConnect } from '../../utils/connectDB';
import { mysqlConnect1 } from '../../utils/connectDB';


export default async function handler(req, res) {

    /*
  const mySqlENV = {
    host: '109.156.170.244',
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT),
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
  
}
*/



// testing node fetch:
const mysqlDetails = await mysqlConnect1();
console.log('mysql details :>>>', mysqlDetails)






const connection = await mysql.createConnection(mysqlDetails);
// const connection = await mysql.createConnection(mysqlConnect);


const values=[];

const query = `select * from contact`;
const [results] = await connection.execute(query, values);

// console.log('result from reading from DB naphill.contact: >>>>> ', results);

    res.json({messages:results});
}