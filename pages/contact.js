import {useState, useEffect, use} from 'react';

import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"



// 🚩
// we could get the /api/contact-details from here and send it in body






export default function Contact () {
    console.clear();


    console.log('FRONT: username from env vars: ',process.env.username);
    console.log('FRONT: password from env vars: ',process.env.password);
    console.log('FRONT: port from env vars: ',process.env.port);
    console.log('FRONT: databse from env vars: ',process.env.databse);
    console.log('FRONT: tableName from env vars: ',process.env.tableName);
  
    console.log('FRONT: all env vars: ',process.env);
  
  



        async function handleSubmit () {


            console.log('handle submit func');







            console.log('running on submit');

            let name = document.querySelector('#name').value;
            // let phone = document.querySelector('#phone').value;
            // let email = document.querySelector('#email').value;
            // let message = document.querySelector('#message').value;

            let data = {
                name: name,
                // phone: phone,
                // email:email,
                // message:message,

            }

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


        <h1>Form saving locally</h1>

<div className={styles.wrapper}>

    <input type='text' id="name"/>

    <input type="button" onClick={handleSubmit} value='Submit'/>





    </div>

    </Layout>)
}