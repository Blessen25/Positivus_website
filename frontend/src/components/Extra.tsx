import './extra.css';

const Services_Comp = () => {

    return (
        <div className="services_box">
            
            <div className="service_content">

                <p className="h4">Search Engine Optimization</p>
                
                <div className="service_button">

                        <div className="arrow_btn">
                            <i className="fa-solid fa-arrow-up"></i>
                        </div>
                        <p>Learn More</p>
                </div>
            </div>
            <div className="service_img">

                <img src="../../src/assets/images/service/service_one.png" alt="Service Images" loading='lazy'/>
            </div>
        </div>
    )
}

export { Services_Comp };