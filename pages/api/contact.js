

import mysql from 'mysql2/promise';







export default async function handler(req, res) {



  const mySql = {
      host: '109.156.76.246',
      database:'naphill',
      port: 3306,
      user: 'lucyderojas',
      password: 'Filipo13',

  }


  const mySqlENV = {
      host: '109.156.76.246',
      database: process.env.DATABASE,
      port: parseInt(process.env.PORT),
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
    
  }













  const connection = await mysql.createConnection({
    host: '109.156.76.246',
    database:'naphill',
    port: 3306,
    user: 'lucyderojas',
    password: 'Filipo13',

});



// getting data:
    let data = req.body;
    console.log('data from api/contact:>>> ', data);
    console.log('name:>>> ', data.name);




    const query = `insert into name (name) values ('${data.name}')`;
    const values = [];

    if(data.name) {

      const [results] = await connection.execute(query, values);
    }













    res.status(200).json({contact:"no data yet"});
  }









