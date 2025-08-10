import { useState } from "react";
import { Link } from "react-router-dom";

const Feature2 = ({ features }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedFeature = features[selectedIndex];

    return (
        <section className="feature-section section-padding fix">
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row gy-5 gx-134">

                        {/* KIRI - Grid card */}
                        <div className="col-xl-6 order-1 order-xl-1">
                            <div
                                className="feature-grid"
                            >
                                {features.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`feature-card ${selectedIndex === index ? "active" : ""}`}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <img
                                            src={selectedIndex === index ? item.imageGif : item.imagePng}
                                            alt={item.title}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KANAN - Konten detail */}
                        <div className="col-xl-6 order-2 order-xl-2">
                            <div className="feature-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                        Our Service <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                                        {selectedFeature.title}
                                    </h2>
                                    <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                                        {selectedFeature.description}
                                    </p>
                                </div>
                                <Link
                                    className="theme-btn wow fadeInUp"
                                    data-wow-delay=".2s"
                                    to={selectedFeature.link || "/contact"}
                                >
                                    {selectedFeature.buttonText || "Learn More"}
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature2;