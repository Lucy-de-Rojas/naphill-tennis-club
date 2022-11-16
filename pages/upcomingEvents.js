import {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Link from 'next/link';

import styles from '../styles/bottomLinks.module.css';



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