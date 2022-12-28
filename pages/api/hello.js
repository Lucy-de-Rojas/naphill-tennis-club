import NextCors from "nextjs-cors";

export default async function handler(req, res) {

  await NextCors(req, res, {
    methods: ["GET"],
    origin:"*",
    optionsSuccessStatus: 200,
});


  res.status(200).json({ name: 'John Doe', sender: "benji rojas" })
}
