import { useEffect, useState } from "react";
import type { HeaderProps } from "../../interface";
import "./home.css";
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
                <h1>Positivus</h1>
            </div>
        </>
    )
}