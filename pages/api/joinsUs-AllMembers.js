import mysql from 'mysql2/promise';

import { mysqlConnect } from '../../utils/connectDB';







export default async function handler(req, res) {

    
    
    
    
    try {
            const connection = await mysql.createConnection(mysqlConnect);
            
        console.log('connected to MYSQL in all members api')
    

    
        const query = `select * from membership`;
          
        const values = [];
        const [results] = await connection.execute(query, values);
    
    
    
    res.json(results);

        }
        catch(error) {
            console.log('error: >>>',error)


            res.json([{}]);
        }
        



}