import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';


import {useState, useEffect} from 'react';




export default function Home() {


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
<video width="100%" controls>
  <source src='/Media/videos/What-is-Tennis-by-Lucy-de-Rojas.mp4' type='video/mp4' ></source>
</video>




    </Layout>
  )
}
