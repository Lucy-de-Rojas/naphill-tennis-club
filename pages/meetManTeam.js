
import Layout from "../components/Layout"
import Image from "next/image"

export default function meetManTeam () {


    return (<div>
<Layout>
<h1>Meet the Men's Team</h1>

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