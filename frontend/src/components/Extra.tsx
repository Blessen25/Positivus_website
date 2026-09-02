import React, { useState } from 'react';
import type { Services_Comp_Props, Team_Comp_Props } from '../interface';
import './extra.css';

const Services_Comp:React.FC<Services_Comp_Props> = (Props) => {

    return (
        <div className={`services_box ${Props.background_clr ? Props.background_clr : ""}`}>
            
            <div className={`service_content ${Props.service_background_clr ? Props.service_background_clr : ""}`}>
                <div className="service_details">

                <p className={`h4 ${Props.title_background_clr ? Props.title_background_clr : ""}`}>{Props.title_one}</p>
                <p className={`h4 ${Props.title_background_clr ? Props.title_background_clr : ""}`}>{Props.title_two}</p>
                </div>
                
                <div className="service_button">

                        <div className={`arrow_btn ${Props.btn_clr ? Props.btn_clr : ""}`}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </div>
                        <p className={`text-md ${Props.learn_more_clr ? Props.learn_more_clr : ""}`}>Learn More</p>
                </div>
            </div>
            <div className={`service_img ${Props.service_background_clr ? Props.service_background_clr : "" } }`}>

                <img src={`${Props.image}`} alt="Service Images" loading='lazy'/>
            </div>
        </div>
    )
}



const Working_Progress_Comp:React.FC<Services_Comp_Props> = (Props) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const progressItems = [

        {
            number: "01",
            title: "Working Progress",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        },
        {

            number: "02",
            title: "Research",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        },
        {
            number: "03",
            title: "Implementation",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        },
        {
            number: "04",
            title: "Optimization",
            description: "Lorem ionitoring anpsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        },
        {
            number: "05",
            title: "Communication",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        },
        {
            number: "06",
            title: "Improvement",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aspernatur inventore beatae optio rerum officia officiis! Esse quo odit sit, quod sequi magni dolorem corporis, deleniti consectetur fugiat repellendus ut."
        }

    ];

    const HandleClick = (index: number) => {

        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return(

        <>  
            
            <div className="working_progress">

            {progressItems.map((item, index)=>{
                
                const IsActive = activeIndex === index;
                return(
               <>
                
                <div key={index} className={`working_progress_div ${IsActive ? "working_progress_div_active" : ""}`} >

                <div className="working_progress_firstdiv">

                    <div className="working_progress_num_title">
                        <p className="h1">{item.number}</p>
                        <p className="h2">{item.title}</p>
                    </div>
                    <div className="working_progress_icon" onClick={() => HandleClick(index)}>
                        <i className={`${IsActive ? "fa-solid fa-minus" : "fa-solid fa-plus"} h4`}></i>
                    </div>
                </div>
                
                <div className={`working_progress_content ${IsActive ? "working_progress_content_active" : ""}`}>
                    <div className="working_progress_description">
                    </div>
                    <p className="text-md">{item.description}</p>
                </div>
                    
            </div>
                </>
                )
            })}
            </div>
            
        </>
    )
}

const Team_Comp:React.FC<Team_Comp_Props> = (Props) => {

    const TeamMembers = [

        {

            Image:"",
            Name:"John Smith",
            Title:"CEO and Founder",
            Description:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        },
        {

            Image:"",
            Name:"Jane Doe",
            Title:"Director of Operations",
            Description:"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        },{

            Image:"",
            Name:"Michael Brown",
            Title:"Senior SEO Specialist",
            Description:"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        },{

            Image:"",
            Name:"Emily Johnson",
            Title:"PPC Manager",
            Description:"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        },{

            Image:"",
            Name:"Brian Williams",
            Title:"Social Media Specialist",
            Description:"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        },{

            Image:"",
            Name:"Sarah Kim",
            Title:"Content Creator",
            Description:"2+ years of experience in writing and editing, Skilled in creating compelling, SEO-optimized content for various industries",
        },

    ]
    return(

        <>
            {TeamMembers.map((member, index) => (

                <div key={index} className="team_member_div">
                    
                </div>
            ))}
        </>
    )
}
export { Working_Progress_Comp, Services_Comp, Team_Comp };