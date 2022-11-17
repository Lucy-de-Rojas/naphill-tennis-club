
import Layout from "../components/Layout"
import { useState, useEffect } from 'react';



export default function ContactThankYou () {


    const [data, setData] = useState({});



    useEffect(()=> {


        async function getData() {
            let response = await fetch('api/contact');
            let dataWeb = await response.json();
            console.log('data fetched:>>> ', dataWeb);
            setData(dataWeb);
        }

        getData();
    },[]);









    return (<Layout>

<h1>Thank you for writing to us</h1>


<p>{data.name}</p>
<p>{data.email}</p>
<p>{data.message}</p>



    </Layout>)
}






















