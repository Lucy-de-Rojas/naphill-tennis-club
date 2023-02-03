import fetch from "node-fetch";

const catsURL ='https://catfact.ninja/docs/api-docs.json';

const ourIpURL = "https://ourips-lucy-de-rojas.vercel.app/api/ourips";


const ourIpURLENV  = process.env.ourIp;






export async function mysqlConnect1() {

    console.log('>>>>>>> running node fetch: START  <<<<<<<')

    let response = await fetch(ourIpURLENV);
    let data = await response.json();




    const result = {

    host: data.ourIp,
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT),
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    }

    console.log('result from node fetching:>>>>',result);

    return result;

}








