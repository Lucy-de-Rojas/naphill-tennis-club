
async function getOurIP() {
    let response = await fetch('https://ourips-lucy-de-rojas.vercel.app/api/ourips');
    let data = await response.json();
    console.log(data.ourIps);
    let result = data.ourIps;
    return result;
}






export const mysqlConnect = {
    host: '109.158.58.220',
    database: process.env.DATABASE,
    port: parseInt(process.env.PORT),
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
  
}