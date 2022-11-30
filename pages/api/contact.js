

import mysql from 'mysql2/promise';



export default async function handler(req, res) {


  console.log('env variable USERNAME in api/contact:', process.env.USERNAME);












  const connection = await mysql.createConnection(
    {
      host: '109.156.76.246',
      database: 'naphill',
      port: 3306,
      user: 'lucyderojas',
      password: 'Filipo13',
    }
  );



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









