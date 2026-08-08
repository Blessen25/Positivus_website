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
import { Services_Comp } from "../Extra";


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
                <Home_thirdSection />
                <Home_fourthSection />
                <Home_fifthsection />
                <Home_sixSection />
                <Home_sevenSection />
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

                <div className="logo_track">

                    {[...Logos,  ...Logos].map((Logo, index) => (

                        <img src={Logo.src} alt={Logo.alt} key={index} loading="lazy" className="logo_image"/>
                    ))}
                </div>
            </div>
        </>
    )
}

const Home_thirdSection:React.FC = () => {

    return(

        <>

            <div className="third_section_div">

                    <h3 className="h2 service-content">Services</h3>
                    <div className="text-md">
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </div>
            </div>
        </>
    )
}

const Home_fourthSection:React.FC = () => {

    return(

        <>

            <div className="fourth_section_div">

                   <Services_Comp title_one={"Search engine"} title_two={"optimization"} image={"../../src/assets/images/service/service_one.png"} background_clr="grey_cstm" title_background_clr="black_primary_cstm" service_background_clr="grey_cstm" btn_clr="primary_black_cstm"/>
                   <Services_Comp title_one={"Pay-per-click"} title_two={"advertising"} image={"../../src/assets/images/service/service_two.png"} background_clr="primary_cstm" title_background_clr="white_primary_cstm" service_background_clr="primary_cstm" btn_clr="primary_black_cstm"/>
                   <Services_Comp title_one={"Social Media"} title_two={"Marketing"} image={"../../src/assets/images/service/service_three.png"} background_clr="black_cstm" title_background_clr="white_primary_cstm" service_background_clr="black_cstm" btn_clr="primary_white_cstm" learn_more_clr="grey_clr"/>
                   <Services_Comp title_one={"Email"} title_two={"Marketing"} image={"../../src/assets/images/service/service_four.png"} background_clr="grey_cstm" title_background_clr="black_primary_cstm" service_background_clr="grey_cstm" btn_clr="primary_black_cstm"/>
                   <Services_Comp title_one={"Content"} title_two={"Creation"} image={"../../src/assets/images/service/service_five.png"} background_clr="primary_cstm" title_background_clr="white_primary_cstm" service_background_clr="primary_cstm" btn_clr="primary_black_cstm"/>
                   <Services_Comp title_one={"Analytics and"} title_two={"Tracking"} image={"../../src/assets/images/service/service_six.png"} background_clr="black_cstm" title_background_clr="white_primary_cstm" service_background_clr="black_cstm" btn_clr="primary_white_cstm" learn_more_clr="grey_clr"/>
            </div>
        </>
    )
}

const Home_fifthsection:React.FC = () => {

    return(

        <>

            <div className="fifth_section_div">

                <div className="fifth_firstsection_div">

                    <p className="h2">Let’s make things happen</p>
                    <p className="text-md">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <Button_Comp_Clr text="Get your Free Proposal" className="geturfreebtn"/>
                </div>
                <div className="fifth_secondsection_div">

                    <img src="../../src/assets/images/Fifth_Sec_image.png" alt="fifth_section" loading="lazy" className="fifth_sec_img"/>
                </div>
            </div>
        </>
    )
}

const Home_sixSection:React.FC = () => {

    return(

        <>

            <div className="third_section_div">

                    <h3 className="h2 service-content">Case Studies</h3>
                    <div className="text-md">
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </div>
            </div>
        </>
    )
}

const Home_sevenSection:React.FC = () => {

    return(

        <>

            <div className="seven_section_div">
                
                <div className="seven_sec_first"> 

                    <p className="text-md">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>                    
                    <a href="#" className="seven_button text-md">Learn More<i className="fa-solid fa-arrow-up seven_arrow"></i></a>
                </div>
                <hr className="seven_straight_line"/>
                <div className="seven_sec_first"> 

                    <p className="text-md">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>                    
                    <a href="#" className="seven_button text-md">Learn More<i className="fa-solid fa-arrow-up seven_arrow"></i></a>
                </div>
                <hr className="seven_straight_line"/>
                <div className="seven_sec_first"> 

                    <p className="text-md">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>                    
                    <a href="#" className="seven_button text-md">Learn More<i className="fa-solid fa-arrow-up seven_arrow"></i></a>
                </div>
            </div>
        </>
    )
}