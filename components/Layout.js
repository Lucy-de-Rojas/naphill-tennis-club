
import Logo from "./Logo"
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"
import RightNavigation from "./RightNavigation"


import styles from '../styles/layout.module.css';


export default function Layout ({children}) {




    return (<div className={styles.layoutWrapper}>
        <Logo/>


{/* 3 column flex box */}
        <div className={styles.content}>
        <MainNavigation />


<div className={styles.children}>

{children}
</div>

{/* <RightNavigation /> */}
        </div>
{/* end of 3 column flex box */}

<BottomLinks />
    </div>)
}