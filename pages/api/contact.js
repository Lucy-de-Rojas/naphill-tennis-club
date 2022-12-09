﻿import mysql from 'mysql2/promise';

import { mysqlConnect } from '../../utils/connectDB';





export default async function handler(req, res) {

  const connection = await mysql.createConnection(mysqlConnect);



// getting data from the front:
    let data = req.body;
    console.log('data from api/contact:>>> ', data);
    console.log('name:>>> ', data.name);




    if(connection) {
      console.log('connected to MYSQL!!');
    }
    if (!connection) {
      console.log('NOT connected to MYSQL');
    }
    
    if(data.name) {
      
      
      const query = `insert into contact (name,email,message,timestamp) values ('${data.name}', '${data.email}','${data.message}','${data.timestamp}')`;
      
      const values = [];
      const [results] = await connection.execute(query, values);
 
 
 
 
    }













    res.status(200).json({contact:"no data yet"});
  }









