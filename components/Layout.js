
import Logo from "./Logo"
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"




export default function Layout ({children}) {




    return (<div>
        <Logo/>
        <MainNavigation />



{children}

<BottomLinks />
    </div>)
}