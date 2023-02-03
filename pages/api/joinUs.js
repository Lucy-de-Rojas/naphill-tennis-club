import mysql from 'mysql2/promise';

import { mysqlConnect } from '../../utils/connectDB';
import { mysqlConnect1 } from '../../utils/connectDB';




export default async function handler(req, res) {

    let data = req.body;

    // testing node fetch:
    const mysqlDetails = await mysqlConnect1();
    console.log('mysql details :>>>', mysqlDetails)





    console.log('data from api:>>> ',data)

    const connection = await mysql.createConnection(mysqlDetails);

    if(connection) {
        console.log('connected top MYSQL');
    }




    // query:
    const query = `insert into membership (first_name, surname, email, phone, address, date_of_birth, membership, membershipSTART,membershipEND, membershipYEARS) values('${data.first_name}', '${data.surname}', '${data.email}', '${data.phone}', '${data.address}', '${data.date_of_birth}', '${data.membership}', '${data.membershipSTART}','${data.membershipEND}' ,'${data.membershipYEARS}')`;




    // executes insert:
    const values = [];
    const [results] = await connection.execute(query, values);




    res.json({join:'us'});
}




