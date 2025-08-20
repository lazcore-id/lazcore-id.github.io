import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";
import { useState, useEffect } from "react";

const Feature1 = () => {
    const [gifSrc, setGifSrc] = useState("/assets/images/homePage/loading_lid.gif");

    useEffect(() => {
        const interval = setInterval(() => {
            setGifSrc(`/assets/images/homePage/loading_lid.gif?${Date.now()}`);
        }, 10000); // reset setiap 10 detik
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Our Mission"
                            Title="Our app is great for individuals, startups and enterprises"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/homePage/artwork_our_mision_1.png"
                                        title="Sustainable Innovation"
                                        content="Delivering sustainable innovation in every technology solution to address the ever-evolving digital challenges."
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/homePage/artwork_our_mision_2.png"
                                        title="Digital Ecosystem"
                                        content="Building a safe and efficient digital ecosystem through reliable consulting, implementation, and system management services."
                                    ></FeatureCard>    
                                      
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s">
                                        <img src={gifSrc} alt="thumb" />
                                    </div>
                                    <div className="shape"><img src="/assets/images/shape/wcuThumbShape1_1.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/homePage/artwork_our_mision_3.png"
                                        title="Global Competitiveness"
                                        content="Enhancing organizational global competitiveness with adaptive, modern, and internationally standardized technology strategies."
                                    ></FeatureCard> 
                                    <FeatureCard
                                        img="/assets/images/homePage/artwork_our_mision_4.png"
                                        title="Real Value"
                                        content="Providing real value to users and partners through solutions that are not only technically effective but also business-relevant."
                                    ></FeatureCard>                                                                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;