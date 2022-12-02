

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



// getting data from the front:
    let data = req.body;
    console.log('data from api/contact:>>> ', data);
    console.log('name:>>> ', data.name);




    const values = [];
    if(connection) {
      console.log('connected to MYSQL!!');
    }
    if (!connection) {
      console.log('NOT connected to MYSQL');
    }
    
    if(data.name) {
      
      
      const query = `insert into contact (name,email,message,timestamp) values ('${data.name}', '${data.email}','${data.message}','${data.timestamp}')`;
      const [results] = await connection.execute(query, values);
    }













    res.status(200).json({contact:"no data yet"});
  }









