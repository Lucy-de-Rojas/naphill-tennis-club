import Layout from "../components/Layout"
import {useState, useEffect} from 'react';
import styles from '../styles/contact-display-messages.module.css';




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

<h1>All messages <br />from Contact page <br />Total: {messages.length}</h1>







{/* displaying all messages: */}
{messages.map((item, index) => {
    return <div key={index} className={styles.wrapper}>

        <div className={styles.paras}>
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.timestamp}</p>
        </div>

        <p className={styles.message}>{item.message}</p>












    </div>})}  {/* end of display all messages */}



    </Layout>)
}