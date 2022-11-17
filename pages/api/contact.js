
import fs from 'fs';




export default async function handler(req, res) {



// getting data:
    let data = req.body;



    let dataToSave = JSON.stringify(data);
    console.log('data from api:>>> ',data);
























    res.status(200).json({contact:"no data yet"});
  }









