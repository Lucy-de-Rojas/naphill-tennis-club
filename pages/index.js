import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';


import {useState, useEffect} from 'react';
import { logVisitors } from '../utils/logVisitors';
import { createTimestamp } from '../utils/createTimestamp';

export default function Home() {
  logVisitors('home');

  


console.log('hello home page');

  const [data, setData] = useState({});


  useEffect(()=> {




    


    async function getData() {

      const response = await fetch('api/home');
      const data = await response.json();
      setData(data);
      console.log('data:>>>',data);


    }



    getData();


    



  },[]);








  return (
    <Layout>


<h1>{data.title}</h1>
<h2>{data.subhead}</h2>
<p>{data.mainInfo}</p>

<h2>What is Tennis? <br />Invite to the Great British Tennis Weekend (May 2015) </h2>
<video width="100%" controls>
  <source src='/Media/videos/What-is-Tennis-by-Lucy-de-Rojas.mp4' type='video/mp4' ></source>
</video>


<h2>Previous Events:</h2>








<div className={styles.image}>

  <p>Barn Dance November 2016</p>

<Image

src="/Media/images/barnDance2016.jpg"
width='509'
height='720'
alt='Naphill tennis club barn dance november 2016'
layout='responsive'

/>

<br />
<br />
<br />
<br />
<br />
<p>Tennis ball machine challenge June 2017</p>
<Image

src="/Media/images/tennisBallMachineChallenge.jpg"
width='509'
height='720'
alt='Naphill tennis club barn dance november 2016'
layout='responsive'

/>



</div>




    </Layout>
  )
}
