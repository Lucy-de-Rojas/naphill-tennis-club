
import Logo from "./Logo"
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"
import RightNavigation from "./RightNavigation"


import styles from '../styles/layout.module.css';


export default function Layout ({children}) {




    return (<div>
        <Logo/>


{/* 3 column flex box */}
        <div className={styles.content}>
        <MainNavigation />



{children}

<RightNavigation />
        </div>
{/* end of 3 column flex box */}

<BottomLinks />
    </div>)
}