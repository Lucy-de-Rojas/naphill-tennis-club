import {useState, useEffect, use} from 'react';

import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"


import { useForm} from 'react-hook-form';

// 🚩
// we could get the /api/contact-details from here and send it in body






export default function Contact () {


    const { register, handleSubmit } = useForm();


    // const onSubmit = data => console.log(data);


    async function onSubmit(data) {

        console.log('data from submit:>>> ',data);






        let response = await fetch('api/contact',{
            method:'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body: JSON.stringify(data),

        });

    }




/*
        async function handleSubmit (event) {

            console.log('handle submit func');







            console.log('running on submit');

            let name = document.querySelector('#name').value;
            let phone = document.querySelector('#phone').value;
            let email = document.querySelector('#email').value;
            let message = document.querySelector('#message').value;

            let data = {
                name: name,
                phone: phone,
                email:email,
                message:message,

            }

            // console.log('data: >>>',data);


            let response = await fetch('api/contact',{
                method:'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body: JSON.stringify(data),

            });



        }


*/


















    return (<Layout>


        <h1>Form </h1>

<div className={styles.wrapper}>


        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >




      <input    {...register("name")}
                placeholder='name'
                required
                />

      <input
                {...register('email')}
                placeholder='email'
      />


<textarea
                {...register('message')}
                placeholder='message'
                rows="5"
      />







      <input type="submit" />
    </form>


    </div>

    </Layout>)
}