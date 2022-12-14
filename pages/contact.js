import {useState, useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {useForm} from 'react-hook-form';
import Head from 'next/head';

import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"
import { createTimestamp } from '../utils/createTimestamp';
import { logVisitors } from '../utils/logVisitors';



// 🚩
// we could get the /api/contact-details from here and send it in body






export default function Contact () {
    // logVisitors('contact');
    // console.clear();

    const timestamp = createTimestamp();


    console.log('timestamp:>>>>', timestamp);
    console.log('loading contact page');



    // for the form hook:
    const formDefaults = {defaultValues: {
        name:'',
        email: '',
        message: '',
        timestamp: timestamp,
    }};

    // using form hook:
    const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);



    
 
    
    
    
    





    return (<Layout>
<Head><title>
    Tennis sessions for schools High Wycombe, Bucks, Buckinghamshire
    </title></Head>

        <h1>Contact Naphill Tennis Club</h1>




<form onSubmit={handleSubmit(async(data) => {
  

// sending data to API/Contact:
    let response = await fetch('api/contact', {
        method:'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Content-Type":"application/json",
        },
        
        body: JSON.stringify(data),

    });


// redirecting to thank you page:
        // sharing data:
        Router.push({
            pathname:'/contact-thank-you',
            query: {
                name: data.name,
                email: data.email,
                message: data.message,
            },
        });



})}>


{/* name: 👍 */}
    <input {
        ...register("name", {
        required: {value: true, message: 'we do need your name'}, 
        minLength: {value: 2, message: 'tooooo short'},
        maxLength: {value: 100, message: 'tooooo long'},
        
    })}
        type="text"
        placeholder='name' />
        <p>{errors.name?.message}</p>



{/* email:  👍 */}

<input {
       ...register("email", {
        required: {value: true, message: 'we do need your email'},
        minLength: {value: 2, message: 'too short'},
        maxLength: {value: 100, message: 'too long'},



})}


    placeholder='email'
    type="email" />
    <p>{errors.email?.message}</p>
    





{/* message: */}

    <textarea
        {...register("message", {
            required: {value: true, message: 'we do need your message'},
            minLength: {value: 10, message: 'too short, 10 characters at least'},
            maxLength: {value: 2000, message: 'too long'},
        })}
        placeholder='message'
    
    ></textarea>
    <p>{errors.message?.message}</p>






{/* submit: */}
<input type="submit"/>

</form>





 


    </Layout>)
}