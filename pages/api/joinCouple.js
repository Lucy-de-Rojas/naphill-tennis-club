

import mysql from 'mysql2/promise';

import { mysqlConnect } from '../../utils/connectDB';





export default async function handler(req, res) {


    const connection = await mysql.createConnection(mysqlConnect);

    // check mysql connection:
    if(connection) {console.log('MYSQL connected')}

    let data = req.body;
    const values = [];

    const couple = data.first_name1 + " " + data.surname1 + "," + data.first_name2 + " " + data.surname2;  





// first person insert:
const query1 = `insert into membership (first_name, surname, email,phone, address, date_of_birth, membership, couple, membershipSTART, membershipEND, membershipYEARS) values ('${data.first_name1}', '${data.surname1}','${data.email1}','${data.phone1}', '${data.address1}', '${data.date_of_birth1}',  'couple',  '${couple}', '${data.membershipSTART1}', '${data.memnershipEND1}', '${data.membershipYEARS1}')`;


const [results1] = await connection.execute(query1, values);






// second person insert:
const query2 = `insert into membership (first_name, surname, email,phone, address, date_of_birth, membership, couple, membershipSTART, membershipEND, membershipYEARS) values ('${data.first_name2}', '${data.surname2}','${data.email2}','${data.phone2}', '${data.address2}', '${data.date_of_birth2}',  'couple',  '${couple}', '${data.membershipSTART2}', '${data.memnershipEND2}', '${data.membershipYEARS2}')`;


const [results2] = await connection.execute(query2, values);



}

