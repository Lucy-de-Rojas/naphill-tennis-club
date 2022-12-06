// API

export default async function handler() {







// saving to db:

    const connection = await mysql.createConnection(mysqlConnect);

      
    const query = `insert into visitors (page, ips, timestamp) values ('${page}', '${'hellos'}','${timestamp}')`;
  //   const values = [];
  //   const [results] = await connection.execute(query, values);
 



    res.json({visitors: "visitors"});
}