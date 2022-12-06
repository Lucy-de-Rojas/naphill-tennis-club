
import { useState, useEffect} from 'react';
import {getData} from '../libs/getData';


import styles from '../styles/about.module.css';
import Layout from "../components/Layout"



import { logVisitors } from '../utils/logVisitors';



export default function About () {
    logVisitors('about');

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
        <p className={styles.para}>{dataWeb.clubHouseKeys}</p>

        <h2>Attire</h2>
        <p className={styles.para}>{dataWeb.attire}</p>



        <h2>Court Availability</h2>
        <p className={styles.para}>{dataWeb.courtAvailability}</p>




        <h2>Visitors</h2>
        <p className={styles.para}>{dataWeb.visitors}</p>



        <h2>Security</h2>
        <p className={styles.para}>{dataWeb.security}</p>











        <p>{dataWeb.mainInfo}</p>





        </Layout>
    </div>)
}