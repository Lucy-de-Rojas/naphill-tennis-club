import mysql from 'mysql2/promise';
import { mysqlConnect } from "../../utils/connectDB";





export default async function handler(req, res) {

let visitorData = req.body;

const connection = await mysql.createConnection(mysqlConnect);

if(connection) {
    console.log("connected to MYSQl");
    const values = [];
    const query = `insert into visitors (page, ips, timestamp) values ('${visitorData.page}', '${visitorData.visitor}','${visitorData.timestamp}')`;
    const [results] = await connection.execute(query, values);
}





res.json({visitor: 'lucy'});

}