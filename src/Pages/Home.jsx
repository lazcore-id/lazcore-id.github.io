import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import OurWorks from "../Components/About/OurWorks";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";
import Testimonial from "../Components/Testimonial/Testimonial";
import ScrollToTop from "../Components/Common/ScrollToTop";

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <HeroBanner1
                subtitle="<span>News!</span>Find Your Solution"
                title="Accelerating Your Growth with Technology"
                content="Solusi teknologi strategis yang mendorong pertumbuhan bisnis Anda — lebih efisien, lebih fleksibel, dan sepenuhnya sesuai dengan kebutuhan Anda."
                btnname="Get Started Now"
                btnurl="/contact"
                btntwo="Learn More"
                btn2url="/"
                cusimg="/assets/images/homePage/ic_logo_head.png"
                cusnumber="2,291"
                cuscontent="Happy Customers"
                rating="4.8/5"
                ratingcon="Rating"
                img="/assets/images/homePage/artwork_header.png"
            ></HeroBanner1>
            <Brand1></Brand1>
            <About1
                img1="/assets/images/homePage/artwork_header.png"
                img2="/assets/images/homePage/artwork_about_us-bwh.png"
                subtitle="About Us"
                title="Who We Are"
                contens={[
                    "<strong>Lazcore Inovasi Digital</strong> is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.",
                    "Penetrating into a fairly large and modern activity, the company Lazcore Inovasi Digital provides each time clearer and perfected solutions for the task.",
                    "Every employee of our company has a great experience in working with customers and solving tasks, while keeping unlimited energy and initiative.",
                    "Every client, who had come to us, did not left without a well-provided service.",
                    "Let us work together - you will not regret!"
                ]}
                // content="L.I.D is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.Penetrating into a fairly large and modern activity, the company Lazcore Inovasi Digital provides each time clearer and perfected solutions for the task."
                // FeatureList={[
                //     "With our Technological and Marketing Solutions.",
                //     "We are trusted all over the world.",
                //     "Start Your 14 Days Free Trials Today!",
                // ]}                
                btnname="Discover More"
                btnurl="/"
            ></About1>
            {/* <HowWork></HowWork> */}
            {/* <OurWorks></OurWorks> */}
            <Choose1
                subtitle="Our Vision"
                title="Get Benefit By Using Trending Apps"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
                FeatureList={[
                    "Friendly Design",
                    "SEO Optimized",
                ]} 
                FeatureList2={[
                    "Cloud Storage",
                    "Strong Security",
                ]}                 
                btnname="Download App"
                btnurl="/"
            ></Choose1>
            <Feature1></Feature1>
            {/* <Counter1></Counter1> */}
            {/* <Faq1></Faq1> */}
            <Testimonial></Testimonial>
            <Feature2
                features={[
                    {
                        title: "Social Media Management",
                        description: "your expert partner for a strong online presence. We create engaging content, manage platforms, and analyze performance. Maximize your social media ROI with us.",
                        imagePng: "/assets/images/homePage/artwork_sosmed.png",
                        imageGif: "/assets/images/homePage/artwork_sosmed.gif",
                        link: "/software",
                        buttonText: "Explore Software"
                    },
                    {
                        title: "Business Development",
                        description: "your partner for accelerated growth. Our strategic approach and market expertise drive revenue and expand your business. From market research to impactful partnerships, we deliver innovative solutions for sustainable success. Choose us to unlock your full potential and enhance your market positioning.",
                        imagePng: "/assets/images/homePage/artwork_bisdev.png",
                        imageGif: "/assets/images/homePage/artwork_bisdev.gif",
                        link: "/design"
                    },
                    {
                        title: "IT Security",
                        description: "your trusted partner for comprehensive IT security. Our expert team and advanced technologies protect your digital assets from evolving cyber threats. From risk assessments to incident response, we offer end-to-end solutions for a secure digital landscape. Choose us for peace of mind in today's interconnected world.",
                        imagePng: "/assets/images/homePage/artwork_security.png",
                        imageGif: "/assets/images/homePage/artwork_security.gif",
                        link: "/support"
                    },
                    {
                        title: "Hosting & Cloud Services",
                        description: "your trusted partner for scalable and secure cloud solutions. With advanced technology and flexible hosting options, we optimize your digital operations for seamless performance. Experience the power of cloud computing with us and focus on driving your business forward while we handle your infrastructure needs.",
                        imagePng: "/assets/images/homePage/artwork_hosting.png",
                        imageGif: "/assets/images/homePage/artwork_hosting.gif",
                        link: "/server"
                    }
                ]}
            />
            {/* <Pricing1></Pricing1> */}
            <Cta1
                subtitle="Our Works"
                title="See All Your Account & Add Invesments in one place"
                content="Access and manage all your investment accounts—from stocks, mutual funds, crypto, and other assets—in one integrated dashboard. Add new investments, update your portfolio, and monitor its performance in real time, without having to switch platforms."
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/homePage/artami_preview.gif"
            ></Cta1>
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default Home;