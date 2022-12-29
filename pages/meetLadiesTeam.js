
import Layout from "../components/Layout"
import Image from "next/image"
import Head from "next/head"

import { logVisitors } from "../utils/logVisitors"



export default function meetLadiesTeam () {
        // logVisitors('meet the ladies team');

    return (<div>
<Layout>
<Head><title>
   🐞 Adult tennis coaching High Wycombe, Bucks, Buckinghamshire
    </title></Head>


<h1>Ladies Team</h1>


<Image
    src='/Media/images/LadiesTeam.jpg'
    width={1536}
    height={2048}
    alt='Naphill tennis club - ladies team'
    layout='responsive'
/>



</Layout>
    </div>)
}