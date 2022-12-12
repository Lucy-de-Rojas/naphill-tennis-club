import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/Layout"





export default function JoinUsThankYou() {




    
    const router = useRouter();
    const {query: {first_name, surname,email,phone, address, date_of_birth, membership, membershipSTART, membershipEND}} = router;






    return (<Layout>

<h1>Thank you for joining<br /> Naphill Tennis club</h1>
<h2>Here are your membership details:</h2>
<hr />
<p>First name: {first_name}</p>
<p>Surname: {surname}</p>
<p>Date of Birth: {date_of_birth}</p>
<p>Address: {address}</p>
<p>Email: {email}</p>
<p>Phone: {phone}</p>
<p>Membership start: {membershipSTART}</p>
<p>Membership end: {membershipEND}</p>


<hr />


<Link href="/joinUs">
<button>Add more members</button>
</Link>


    </Layout>)
}





