
import fs from 'fs';





export default async function handler(req, res) {

// getting data:
    let data = req.body;

    let dataToSave = JSON.stringify(data);








    // writing file api/contact-details:
    let writing = await fs.writeFile('http://localhost:3001/pages/api/contact-details.js', 'some contect', function (err) {
        console.log('writing start');
        if(err) return console.log(err);
        console.log('writing end');

    });






    if(!data) {
        data = {
            message: 'no data',
        }

    }







    res.status(200).json(data);
  }









