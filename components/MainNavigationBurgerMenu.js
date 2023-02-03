
// import Hamburger from "hamburger-react";
// import {Divide as Hamburger} from 'hamburger-react';
import {Sling as Hamburger } from 'hamburger-react';

import anime from "animejs";

import {useState, useEffect} from 'react';
import Link from "next/link";

import styles from '../styles/mainNavigationBurgerMenu.module.css';



export default function MainNavigationBurgerMenu() {


     function doSomething() {

        let navigation = document.querySelector('.mainNavigationBurgerMenu_navigation__gdlOJ');


        // open:
        if(!isOpen) {
            console.log('opening navigation');


            anime({
                targets: navigation,
                duration: 800,
                translateX: 0,
                easing: "easeInOutSine",
                backgroundColor: "#049919",
                opacity: 1,


            });




        

            

        }
        // to close:
        else {
            console.log('hiding navigation');
            

            anime({
                targets: navigation,
                duration: 800,
                translateX: "-100%",
                easing: "easeInOutSine",
                backgroundColor: "#fff200",
                opacity: 0,

                

            });

        }


    }

const [isOpen, setOpen] = useState(false)


    return (<div>

<div className={styles.menu}>

        <Hamburger toggled={isOpen} toggle={setOpen} onToggle={doSomething} rounded easing="ease-in" color="#049919"
        label="Show Menu" size={50}
         />
        
        </div>





{/* navigation: */}
<div className={styles.navigationWrapper}>

        <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/upcomingEvents">Upcoming Events</Link>
            <Link href="/meetLadiesTeam">Meet the Ladies Team</Link>
            <Link href="/meetManTeam">Meet the Mens Team</Link>
            <Link href="/joinUs">Join Us</Link>
            <Link href="/contact">Contact</Link>



        </nav></div>

    
    </div>)
}