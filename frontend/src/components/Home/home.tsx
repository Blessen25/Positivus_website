import { useEffect, useState } from "react";
import type { HeaderProps } from "../../interface";
import "./header.css";
import "./home.css";
import { Button_Comp_Clr } from "../Button/Button";
const Home_Comp = () => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return() => {

            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    return(

        <>

            <Header scrolled={scrolled}/>
            <div className="containerdiv">
            </div>   
        </>
    )
}

export default Home_Comp;

const Header:React.FC<HeaderProps> = (Props) => {

    const [sidebaractive, setSidebarActive] = useState(false);
    const handleSidebarToggle = () => {

        setSidebarActive(!sidebaractive);
    }
    return(
    
        <>
            <div className={`header_div ${Props.scrolled ? "scrolled" : ""}`}>
                <div className="header-container container-width">
                    <div className="icondiv">
                        <img src="../../src/assets/images/Icon.png" className="custom-icon"/> 
                        <h1>Positivus</h1>
                    </div>
                    <i className={`fa-solid fa-bars custom-bars h1 fw-900 ${sidebaractive ? "sidebaractive" : ""}`} onClick={handleSidebarToggle}></i>
                    <div className="custom-anchordiv">

                        <a href="#" className="text-md">About Us</a>
                        <a href="#" className="text-md">Services</a>
                        <a href="#" className="text-md">Use Cases</a>
                        <a href="#" className="text-md">Pricing</a>
                        <a href="#" className="text-md">Blog</a>
                        <Button_Comp_Clr text='Request a quote'/>
                    </div>
                </div>
            </div>

            {sidebaractive && (

                <>

                    <div className="overlay_sidebar"></div>
                    <div className="sidebar">

                    </div>
                </>
            )}
        </>
    )
}