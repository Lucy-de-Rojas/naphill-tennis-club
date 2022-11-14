
import Logo from "./Logo";
import Head from "next/head";
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"
import RightNavigation from "./RightNavigation"
import LogoAndMenu from "./Logo-and-Menu"

import styles from '../styles/layout.module.css';


export default function Layout ({children}) {




    return (<div className={styles.layoutWrapper}>



<Head>



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />




</Head>

<LogoAndMenu />




        <div className={styles.content}>


<div className={styles.children}>


{children}
</div>

        </div>

<BottomLinks />
    </div>)
}