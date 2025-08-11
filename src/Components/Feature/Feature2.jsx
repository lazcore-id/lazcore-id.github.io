import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Feature2 = ({ features }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedFeature = features[selectedIndex];

    const handleCardClick = (e, index) => {
        setSelectedIndex(index);

        // ripple effect
        const card = e.currentTarget;
        const ripple = document.createElement("span");
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = "ripple";

        const oldRipple = card.querySelector(".ripple");
        if (oldRipple) oldRipple.remove();
        card.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // jeda antar anak
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="feature-section section-padding fix">
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row gy-5 gx-134">

                        {/* KIRI - Grid card */}
                        <div className="col-xl-6 order-1 order-xl-1">
                            <div className="feature-grid">
                                {features.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`feature-card ${selectedIndex === index ? "active" : ""}`}
                                        onClick={(e) => handleCardClick(e, index)}
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
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex} // agar animasi ulang saat ganti
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={containerVariants}
                                    className="feature-content"
                                >
                                    <motion.div className="section-title" variants={itemVariants}>
                                        <div className="subtitle">
                                            Our Service <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                                        </div>
                                    </motion.div>

                                    <motion.h2 className="title" variants={itemVariants}>
                                        {selectedFeature.title}
                                    </motion.h2>

                                    <motion.p className="section-desc" variants={itemVariants}>
                                        {selectedFeature.description}
                                    </motion.p>

                                    <motion.div variants={itemVariants}>
                                        <Link
                                            className="theme-btn mt-5"
                                            to={selectedFeature.link || "/contact"}
                                        >
                                            {selectedFeature.buttonText || "Learn More"}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature2;