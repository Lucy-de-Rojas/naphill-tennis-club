
import styles from '../styles/Logo-and-Menu.module.css';
import Head from 'next/head';
import Logo from './Logo';

import MainNavigation from './MainNavigation';




export default function LogoAndMenu () {


    return (<div className={styles.wrapper}>

<Logo />

<input type="checkbox" id="check" className={styles.check} />


<label for="check" className={styles.label}></label>



<div className={styles.content}>

<MainNavigation />

</div>



    </div>





    )
}