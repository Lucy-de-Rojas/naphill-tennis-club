

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/logo.module.css';

export default function Logo () {


    return (<div className={styles.wrapper}>


<div className={styles.logo}>

<Link href='/'>

        <Image

src= '/Media/LogosAndIcons/NaphillTennisClub-LogoNEW.png'
width='1559'
height='850'
alt="naphill tennis club logo"
layout="responsive"

/>


</Link>

</div>

    </div>);
}