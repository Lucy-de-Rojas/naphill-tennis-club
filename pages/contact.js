import {useState, useEffect} from 'react';

import styles from '../styles/contact.module.css';
import Layout from "../components/Layout"








export default function Contact () {



     function handleSubmit (event) {
        // event.preventDefault();



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

        console.log(data);









    }







    return (<Layout>

<h1>Contact</h1>


<div className={styles.wrapper}>

{/* <form  method='POST' className={styles.form}> */}


<input type='text' required name="name" id="name" placeholder='name'/>
<input type='email' required  name="email"  id="email" placeholder='email'/>
<input type="tel" name="phone" id="phone" placeholder='phone'/>
<input type="text" maxlength="1000" name="message" id="message" placeholder='message' />




<button className={styles.iconWrap} onClick={handleSubmit}>
<i class="fa-solid fa-paper-plane fa-3x"></i>
</button>




{/* <input type="submit" onSubmit={handleSubmit} /> */}
{/* </form> */}

</div>







    </Layout>)
}