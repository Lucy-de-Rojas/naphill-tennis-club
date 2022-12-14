
import Hamburger from "hamburger-react";
import anime from "animejs";

import {useState, useEffect} from 'react';
import Link from "next/link";

import styles from '../styles/mainNavigationBurgerMenu.module.css';



export default function MainNavigationBurgerMenu() {


     function doSomething() {

        let navigation = document.querySelector('.mainNavigationBurgerMenu_navigation__gdlOJ');

        // open:
        if(!isOpen) {
            console.log('open navigation');

            // navigation.style.backgroundColor = '#fff200';

            anime({
                targets: navigation,
                duration: 800,
                translateX: 0,
                easing: "easeInOutSine",
                backgroundColor: "#fff200",


            });




        

            

        }
        // to close:
        else {
            console.log('hide navigation');
            
            // navigation.style.backgroundColor = '#049919';

            anime({
                targets: navigation,
                duration: 800,
                translateX: "-100%",
                easing: "easeInOutSine",
                backgroundColor: "#049919",

                

            });

        }


    }

const [isOpen, setOpen] = useState(false)


    return (<div>

        <Hamburger toggled={isOpen} toggle={setOpen} onToggle={doSomething} rounded />





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



        </nav>

</div>

    
    </div>)
}