import NextCors from "nextjs-cors";


export async function allowCORS() {

    await NextCors(req, res, {
        methods: ["GET"],
        origin:"*",
        optionsSuccessStatus: 200,
    });



}









