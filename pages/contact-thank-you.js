﻿
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";



export default function ContactThankYou() {
    console.clear();

    const router = useRouter();
    const {query: {name, email, message}} = router;
    // const props = {name}


 




    return (<Layout>
        <Head><title>🌻 Contact Thank You</title></Head>
<h1>Thank you for your message</h1>

<p>name: {name}</p>
<p>email: {email}</p>
<p>message: {message}</p>



    </Layout>);
}