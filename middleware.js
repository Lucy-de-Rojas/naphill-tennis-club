import { NextResponse} from 'next/server';
import NextCors from "nextjs-cors"


export async function middleware(reqest) {
    console.log('middle')

    
//   await NextCors(req, res, {
//     methods: ["GET"],
//     origin: "*",
//     optionsSuccessStatus: 200,
//   });






    return NextResponse.rewrite(reqest.nextUrl);
}



export const config = {
    matcher: "/api/:function*",
}







