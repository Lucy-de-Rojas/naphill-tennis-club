import { NextResponse} from 'next/server';
import NextCors from "nextjs-cors"


export async function middleware(req) {

    
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });






    return NextResponse.rewrite(req.nextUrl);
}



export const config = {
    matcher: "/api/:path*",
}







