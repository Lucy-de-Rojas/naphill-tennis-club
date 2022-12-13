import Layout from "../components/Layout";


import {useState, useEffect} from 'react';
import Head from "next/head";


// tide up timestamp from mysql:
let regex = /T[A-Z0-9:.]*/gi;



export default function JoinUsDisplayAllMembers() {


    const [results, setResults] = useState([]);


    useEffect(()=>{
        async function getMembers() {
            console.log('before data fetching:')

            let response = await fetch('/api/joinsUs-AllMembers');
            let data = await response.json();

            console.log('data from back end:', data);

            setResults(data);





        }

        getMembers();
    },[]);







    return (<Layout>
        <Head>
            <title>
                👍 hello
            </title>
        </Head>
<h1>All Memberships:</h1>
<hr />

{results.map((item, index)=>{
    return <div key={index}>

        {item.first_name} {item.surname},

         <br />
START: 
         {item.membershipSTART.replace(regex,'')}, 

         <br />
        END: {item.membershipEND.replace(regex, '')}
        <hr />
    </div>
})}





    </Layout>);
}





