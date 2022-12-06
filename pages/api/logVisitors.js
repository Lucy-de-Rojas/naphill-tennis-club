

// API
import mysql from 'mysql2/promise';
import { mysqlConnect } from '../../utils/connectDB';





export default async function handler(req, res) {


    console.log('hello from api/logVisitors:');

// fecthing data from logVisitors:
    let visitorData = req.body;

    console.log('visitorData from homepage:',data);








// saving to db:
// const query = `insert into visitors (page, ips, timestamp) values ('${page}', '${'hellos'}','${timestamp}')`;

        // const connection = await mysql.createConnection(mysqlConnect);
      //   const values = [];
    //   const [results] = await connection.execute(query, values);
 



    res.json({visitors: "visitors"});
}