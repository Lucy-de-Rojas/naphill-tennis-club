
import Layout from "../components/Layout";
import { useRouter } from "next/router";




export default function ContactThankYou() {
    console.clear();

    const router = useRouter();
    const {query: {name, testString}} = router;
    // const props = {name}


 




    return (<Layout>
<h1>thank you</h1>

<p>name: {name}</p>
<p>test string: {testString}</p>



    </Layout>);
}