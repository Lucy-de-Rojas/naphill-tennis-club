import mysql from 'mysql2/promise';

import { mysqlConnect } from '../../utils/connectDB';
import { mysqlConnect1 } from '../../utils/connectDB';






export default async function handler(req, res) {

        
    // testing node fetch:
    const mysqlDetails = await mysqlConnect1();
    console.log('mysql details :>>>', mysqlDetails)





    
    
    
    
    try {
            const connection = await mysql.createConnection(mysqlDetails);
            
        console.log('connected to MYSQL in all members api')
    

    
        const query = `select * from membership`;
          
        const values = [];
        const [results] = await connection.execute(query, values);

        console.log('all members from API: >>', results)
    
    
    
    res.json(results);

        }
        catch(error) {
            console.log('error: >>>',error)


            res.json([{}]);
        }
        



}