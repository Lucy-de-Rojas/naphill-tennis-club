import Layout from "../components/Layout"
import {useState, useEffect} from 'react';





export default function DisplayMessages() {

    const [messages, setMessages] = useState([]);




    useEffect(() => {



        async function getMessages() {
            console.clear();

            let response = await fetch('api/contact-messages');
            let messages = await response.json();
            messages = messages.messages;
            console.log('all messages; >>> ',messages);
            console.log("type of messages: >>>",typeof messages);
            setMessages(messages);

        }


        getMessages();





    },[])




    return (<Layout>

<h1>All messages from contact page:</h1>


{messages.map((item, index) => {
    return <div key={index}>
<p>{item.name}: {item.email} : {item.message} : {item.timestamp}</p>

    </div>
})}



    </Layout>)
}