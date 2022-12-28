// import NextCors from "nextjs-cors";
import { allowCORS } from "../../libs/allowCors";



export default async function handler(req, res) {



//   await NextCors(req, res, {
//     methods: ["GET"],
//     origin:"*",
//     optionsSuccessStatus: 200,
// });

allowCORS(req, res);


  res.status(200).json({sender: "benji rojas", reciever: 'mama' })
}
