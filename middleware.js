import { NextResponse} from 'next/server';


export async function middleware(reqest) {
    console.log('middle');

    



    




    return NextResponse.rewrite(reqest.nextUrl);
}



// export const config = {
//     matcher: "/api/:function*",
// }








// export const config = {
//     matcher: "/api/:function*",
// }






