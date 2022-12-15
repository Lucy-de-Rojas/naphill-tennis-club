
import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/bottomLinks.module.css';





export default function BottomLinks() {


    const linkTarget = '_blank';




    return (<div className={styles.bottomLinks}>

        
<Head>
    {/* these are for font awesome icons to use: */}
<script defer async src="https://kit.fontawesome.com/9f56af7d44.js" crossorigin="anonymous"></script>

</Head>






{/* facebook link: */}
<Link href="https://www.facebook.com/groups/naphilltennisclub" legacyBehavior>
<a target="_blank">     
<div className={styles.iconWrap}>
        <i class="fa-brands fa-facebook fa-3x"></i>
</div></a>
</Link>









{/* email link: */}
<Link href='mailto:naphilltennismembership@gmail.com' legacyBehavior >
<a target="_blank">
    <div className={styles.iconWrap}>
    
<i class="fa-solid fa-envelope-open-text fa-3x"></i>
</div></a></Link>




{/* phone link: */}
<Link href='tel:01494565406' legacyBehavior>
<a target="_blank">
    <div className={styles.iconWrap}>
<i class="fa-solid fa-square-phone fa-3x"></i>
</div></a></Link>







{/* directions link: */}
<Link href='https://www.google.com/maps/dir/51.663728,-0.775078/@51.6636273,-0.8451027,12z' legacyBehavior>
<a target="_blank">
<div className={styles.iconWrap}>

<i class="fa-solid fa-diamond-turn-right fa-3x"></i>
</div></a></Link>




    </div>)
}













