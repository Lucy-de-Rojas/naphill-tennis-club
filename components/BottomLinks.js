
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/bottomLinks.module.css';




export default function BottomLinks () {




    return (<div className={styles.bottomLinks}>



        <Link href="https://www.facebook.com/groups/naphilltennisclub" legacyBehavior><a target="_blank">
            <Image
                src='/Media/LogosAndIcons/facebookNaphill.svg'
                width={50}
                height={50}
                alt='Naphill tennis Club Facebook link'
            />

</a>

            </Link>

    </div>)
}













