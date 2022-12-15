
import Logo from "./Logo";
import Head from "next/head";
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"
import RightNavigation from "./RightNavigation"
import LogoAndMenu from "./LogoAndMenu"

import styles from '../styles/layout.module.css';

import Link from "next/link";





import Script from "next/script";



export default function Layout ({children}) {




    return (<div className={styles.layoutWrapper}>



<Head>
    {/* these are for font awesome icons to use: */}
<script defer async src="https://kit.fontawesome.com/9f56af7d44.js" crossorigin="anonymous"></script>


<link rel="shortcut icon" href="Naphill-Tennis-Club-Favocon.ico" />



{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}




</Head>

<div className={styles.disclaimer}>
    📣 This site is portfolio example of site between 2014-2022. <br />To visit current site of Naphill Tennis Club please see this link:
    <br />
    <Link href="https://clubspark.lta.org.uk/NaphillLTC" legacyBehavior>
         <a target="_blank">Naphill Tennis Club</a>
    </Link>

<hr />
    For source code see:  <Link href="https://github.com/Lucy-de-Rojas/naphill-tennis-club" legacyBehavior><a target="_blank">Github</a></Link>
    
    

    
</div>


<LogoAndMenu />



        <div className={styles.content}>


<div className={styles.children}>


{children}
</div>

        </div>
        

<BottomLinks />



        


    </div>)
}