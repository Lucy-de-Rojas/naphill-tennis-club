import { NextResponse} from 'next/server';
// import NextCors from 'nextjs-cors';



export async function middleware(req, res) {
    console.log('middle');

    

    // await NextCors(req, res, {
    //     methods: ["GET"],
    //     origin:"*",
    //     optionsSuccessStatus: 200,
    // });
    


    




    return NextResponse.rewrite(req.nextUrl);
}



// export const config = {
//     matcher: "/api/:function*",
// }








// export const config = {
//     matcher: "/api/:function*",
// }






