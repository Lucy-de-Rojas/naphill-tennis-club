import { allowCORS } from './libs/allowCors';

import { NextResponse} from 'next/server';


export async function middleware(reqest) {
    console.log('middle');

    allowCORS();

    




    return NextResponse.rewrite(reqest.nextUrl);
}



export const config = {
    matcher: "/api/:function*",
}







