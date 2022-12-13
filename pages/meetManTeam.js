
import Layout from "../components/Layout"
import Image from "next/image"
import Head from "next/head"

import { logVisitors } from "../utils/logVisitors"




export default function meetManTeam () {
        // logVisitors('meet the mens team');


    return (<div>
<Layout>
<Head><title>
    Tennis sessions for the retired, High Wycombe, Bucks, Buckinghamshire
    </title></Head>


<h1>Meet the Mens Team</h1>

<Image
    src='/Media/images/mansTeam.jpg'
    width={2048}
    height={1536}
    alt='naphill tennis club - mens team'
    layout='responsive'
/>




</Layout>
    </div>)
}