
import Logo from "./Logo"
import MainNavigation from "./MainNavigation"
import BottomLinks from "./BottomLinks"




export default function Layout ({children}) {




    return (<div>
        <Logo/>
        <MainNavigation />

<h1>Layout</h1>


{children}

<BottomLinks />
    </div>)
}