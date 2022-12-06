
import Layout from "../components/Layout"
import Image from "next/image"


import { logVisitors } from "../utils/logVisitors"



export default function meetLadiesTeam () {
        logVisitors('meet the ladies team');

    return (<div>
<Layout>
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