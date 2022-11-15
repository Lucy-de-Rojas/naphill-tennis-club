
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/bottomLinks.module.css';




// font awesome:
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare, faCoffee, faLocationArrow, faLocationPinLock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function BottomLinks () {




    return (<div className={styles.bottomLinks}>

<div className={styles.iconWrap}>

<FontAwesomeIcon icon={faLocationArrow} />
</div>



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













