import { useEffect, useState } from "react";
import type { HeaderProps } from "../../interface";
import "./header.css";
import "./home.css";
import { Button_Comp_Clr } from "../Button/Button";
import amazon from "../../../src/assets/images/Logo/Amazon_Logo.png";
import dribble from "../../../src/assets/images/Logo/Dribble_Logo.png";
import hubspot from "../../../src/assets/images/Logo/Hubspot_Logo.png";
import notion from "../../../src/assets/images/Logo/Notion_Logo.png";
import netflix from "../../../src/assets/images/Logo/Netflix_Logo.png";
import zoom from "../../../src/assets/images/Logo/Zoom_Logo.png";


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
            <div className="containerdiv container-width">
                <Home_firstSection/>
                <Home_secondSection />
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

                <>

                    <div className={`overlay_sidebar ${sidebaractive ? "overlayactive" : ""}`}></div>
                    <div className={`sidebar ${sidebaractive ? "sidebaropen" : ""}`}>
                        <div className="sidebar-close">
                            <i className={`fa-solid fa-close text-sm }`} onClick={handleSidebarToggle}></i>
                        </div>
                        <div className="sidebar-anchor">
                            
                            <a href="#" className="text-md">About Us</a>
                            <a href="#" className="text-md">Services</a>
                            <a href="#" className="text-md">Use Cases</a>
                            <a href="#" className="text-md">Pricing</a>
                            <a href="#" className="text-md">Blog</a>
                            <Button_Comp_Clr text='Request a quote'/>
                        </div>
                    </div>
                </>
        </>
    )
}

const Home_firstSection:React.FC = () => {

    return(

        <>
            <div className="home_firstsection">

                <div className="home_first_Contentsec">

                    <h1 className="navigatecontent" >Navigating the digital landscape for success</h1>
                    <img src="../../src/assets/images/home_one_sec.png" alt="home_firstsection" className="home_firstsection_img_navigate" loading="lazy"/>
                    <p className="text-md">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <Button_Comp_Clr text="Book a Consultation" className="bookaconsclass"/>
                </div>
                <div className="home_first_Imagesec">   

                    <img src="../../src/assets/images/home_one_sec.png" alt="home_firstsection" className="home_firstsection_img" loading="lazy"/>
                </div>  
            </div>
        </>
    )
}

const Home_secondSection:React.FC = () => {

    const Logos = [

        {src: amazon, alt: "Amazon Logo"},
        {src: dribble, alt: "Dribble Logo"},
        {src: hubspot, alt: "Hubspot Logo"},
        {src: notion, alt: "Notion Logo"},
        {src: netflix, alt: "Netflix Logo"},
        {src: zoom, alt: "Zoom Logo"},
    ]

    return(

        <>

            <div className="second_section_div">

                <div className="logo-track">

                    {[...Logos,  ...Logos].map((Logo, index) => (

                        <img src={Logo.src} alt={Logo.alt} key={index} loading="lazy"/>
                    ))}
                </div>
            </div>
        </>
    )
}