﻿
import Link from "next/link";
import styles from '../styles/rightnavigation.module.css';



export default function RightNavigation () {

    let items = ['About','Upcoming Events','Meet the Ladies Team','Meet the Man`s Team', 'Join Us','Contact'];

    let links = ['about','upcomingEvents','meetLadiesTeam','meetManTeam', 'joinUs','contact'];



    return (<div className={styles.navigation}>

        {/* <h2>Aspects of tennis:</h2> */}
        {
            items.map((item, index)=> {
                return <Link href={links[index]} key={index}><button key={index} className={styles.button}>{item}</button>
                </Link>
            })
        }

    </div>);
}






















