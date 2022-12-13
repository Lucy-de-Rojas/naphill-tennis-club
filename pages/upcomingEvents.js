import {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Link from 'next/link';
import Head from 'next/head';


import styles from '../styles/bottomLinks.module.css';
import { logVisitors } from '../utils/logVisitors';


export default function UpcomingEvents () {
    // logVisitors('upcoming events');

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
<Head><title>
    Tennis courts for hire, High Wycombe, Bucks, Buckinghamshire
    </title></Head>



<h1>{dataWeb.title}</h1>


<p>{dataWeb.message}</p>


{/* facebook link: */}
<Link href="https://www.facebook.com/groups/naphilltennisclub" legacyBehavior>
            <a target='_blank'>
<div className={styles.iconWrap}>
        <i class="fa-brands fa-facebook fa-3x"></i>
</div>
</a></Link>





</Layout></div>)
}