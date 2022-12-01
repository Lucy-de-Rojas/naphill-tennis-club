import {useState, useEffect, use} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {useForm} from 'react-hook-form';


import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"





// 🚩
// we could get the /api/contact-details from here and send it in body






export default function Contact () {
    // console.clear();
    console.log('loading contact page');
    const formDefaults = {defaultValues: {
        name:'',
        email: '',
        message: '',
        timestamp: '',
    }};



    // using form hook:
    const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);



    
 
    
    
    
    
    async function handleSubmitFunc (data) {
        console.clear();
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;


     







        let dataInput = {
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
                    "Content-Type":"application/json",
                },
                
                body: JSON.stringify(dataInput),

            });



            
        // sharing data:
        Router.push({
            pathname:'/contact-thank-you',
            query: {
                name: name,
                email: email,
                message: message,
            },
        });




        }


        











    return (<Layout>


        <h1>Contact Naphill Tennis Club</h1>




<form onSubmit={handleSubmit(async(data) => {
    console.clear();
    console.log('submitting data from the from');
    console.log('name:>>>',data.name);



// sending data to API/Contact:
    let response = await fetch('api/contact',{
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
    
    ></textarea>
    <p>{errors.message?.message}</p>






{/* submit: */}
<input type="submit"/>

</form>





 


    </Layout>)
}