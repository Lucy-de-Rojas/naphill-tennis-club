// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors"


export default async function handler(req, res) {

  await NextCors(req, res, {
    methods: ["GET","PUT"],
    origin: "*",
    optionsSuccessStatus: 200,
  });



  res.status(200).json({ name: 'John Doe', sender: "lucy de rojas" })
}
