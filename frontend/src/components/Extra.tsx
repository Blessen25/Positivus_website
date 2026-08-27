import type { Services_Comp_Props } from '../interface';
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

    return(

        <>  

            <div className="working_progress_div">
                
            </div>
        </>
    )
}

export { Working_Progress_Comp, Services_Comp };