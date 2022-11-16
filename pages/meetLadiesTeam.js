
import Layout from "../components/Layout"
import Image from "next/image"

export default function meetLadiesTeam () {


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