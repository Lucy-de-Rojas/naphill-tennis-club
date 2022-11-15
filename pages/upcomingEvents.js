import {useEffect, useState} from 'react';



import Layout from "../components/Layout"


export default function UpcomingEvents () {

    const [dataWeb, setDataWeb] = useState({});



    useEffect(()=> {

        async function getData() {
            let response = await fetch('api/upcoming-events');

            let data = await response.json();

            setDataWeb(data);

            console.log('data: >>>',data);

        }


        getData();




    },[]);


    return (<div>
<Layout>
<h1>{dataWeb.title}</h1>



</Layout>
    </div>)
}