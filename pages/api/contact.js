
import fs from 'fs';

import nodemailer from 'nodemailer';



export default async function handler(req, res) {



// getting data:
    let data = req.body;



    let dataToSave = JSON.stringify(data);
    console.log('data from api:>>> ',data);

    fs.appendFile('./pages/api/test.json', dataToSave,()=> {});


    let dataSaved = fs.readFile();

























    res.status(200).json(data);
  }









