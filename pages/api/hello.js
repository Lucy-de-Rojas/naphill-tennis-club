import NextCors from "nextjs-cors";
import { allowCORS } from "../../libs/allowCors";

export default async function handler(req, res) {

//   await NextCors(req, res, {
//     methods: ["GET"],
//     origin:"*",
//     optionsSuccessStatus: 200,
// });

allowCORS();

  res.status(200).json({ name: 'John Doe', sender: "benji rojas" })
}
