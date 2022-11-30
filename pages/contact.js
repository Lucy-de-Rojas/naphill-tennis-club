import {useState, useEffect, use} from 'react';
import Link from 'next/link';
import Router from 'next/router';


import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"



// 🚩
// we could get the /api/contact-details from here and send it in body






export default function Contact () {
    console.clear();
    console.log('loading contact page');



    
 
    
    
    
    
    async function handleSubmit () {
        console.clear();
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;

        let data = {
            name: name,
            email:email,
            message:message,
        }






        // 
        








            // console.log('data: >>>',data);
            let response = await fetch('api/contact',{
                method:'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    "Content-Type":"application/json"
                },
                
                body: JSON.stringify(data),

            });






        }





















    return (<Layout>


        <h1>Contact Naphill Tennis Club</h1>








{/* <form onSubmit={handleSubmit} action="contact-thank-you"> */}
<div className={styles.wrapper}>

    <input type='text' id="name" placeholder='name'/>
    <input type='email' id="email" placeholder='email'/>
    <textarea rows="5" id="message" placeholder='message'/>

    <input type="button" value="Submit" onClick={handleSubmit} />
    {/* <input type="submit" value='Send Us A Message' /> */}

    </div>
{/* </form> */}
 


    </Layout>)
}