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
                <div style={{ height: "2000px" }}></div>
            </div>   
        </>
    )
}

export default Home_Comp;

const Header:React.FC<HeaderProps> = (Props) => {

    return(
    
        <>
            <div className={`header_div ${Props.scrolled ? "scrolled" : ""}`}>
                <div className="header-container">
                    <div className="icondiv">
                        <img src="../../src/assets/images/Icon.png" className="custom-icon"/> 
                        <h1>Positivus</h1>
                    </div>
                    <div className="custom-anchordiv">

                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Use Cases</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                        <Button_Comp_Clr text='Request a quote'/>
                    </div>
                </div>
            </div>
        </>
    )
}