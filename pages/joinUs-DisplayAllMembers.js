import Layout from "../components/Layout";


import {useState, useEffect} from 'react';



export default function JoinUsDisplayAllMembers() {


    const [results, setResults] = useState([]);


    useEffect(()=>{
        async function getMembers() {
            console.log('before data fetching:')

            let response = await fetch('/api/joinsUs-AllMembers');
            let data = await response.json();

            console.log('data from back end:', data);

            setResults(data);





        }

        getMembers();
    },[]);







    return (<Layout>
<h1>All Memberships:</h1>

{results.map((item, index)=>{
    return <div key={index}>
        {item.first_name}, {item.surname}, {item.membershipSTART}, {item.membershipEND},
    </div>
})}





    </Layout>);
}





