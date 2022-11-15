
import { useState, useEffect} from 'react';
import {getData} from '../libs/getData';


import Layout from "../components/Layout"

export default function About () {

    const [dataWeb, setDataWeb] = useState({});



    useEffect(()=> {


        async function gettingData() {
            let data = await getData('api/about');
            setDataWeb(data);

        }

        gettingData();



    },[]);


    return (<div>
        <Layout>

        <h1>{dataWeb.title}</h1>


        <h2>Club House Keys</h2>
        <p>{dataWeb.clubHouseKeys}</p>

        <h2>Attire</h2>
        <p>{dataWeb.attire}</p>



        <h2>Court Availability</h2>
        <p>{dataWeb.courtAvailability}</p>




        <h2>Visitors</h2>
        <p>{dataWeb.visitors}</p>



        <h2>Security</h2>
        <p>{dataWeb.security}</p>











        <p>{dataWeb.mainInfo}</p>





        </Layout>
    </div>)
}