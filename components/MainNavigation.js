
import Link from "next/link";
import styles from '../styles/mainNavigation.module.css';



export default function MainNavigation () {

    let items = ['About','Upcoming Events','Meet the Ladies Team','Meet the Man`s Team', 'Join Us','Contact'];

    let links = ['about','upcomingEvents','meetLadiesTeam','meetManTeam', 'joinUs','contact'];



    return (<div className={styles.navigation}>
        {
            items.map((item, index)=> {
                return <Link href={links[index]}><button key={index} className={styles.button}>{item}</button>
                </Link>
            })
        }

    </div>);
}






















