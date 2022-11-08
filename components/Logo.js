

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/logo.module.css';

export default function Logo () {


    return (<div className={styles.logo}>

<Link href='/'>










        <Image

            src= '/Media/images/logo.png'
            width='1559'
            height='850'
            alt="logo"
            layout="responsive"


        />

</Link>


    </div>);
}