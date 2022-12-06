
import Layout from "../components/Layout"
import Image from "next/image"


import { logVisitors } from "../utils/logVisitors"




export default function meetManTeam () {
        logVisitors('meet the mens team');


    return (<div>
<Layout>
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