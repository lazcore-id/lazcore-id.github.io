import BreadCumb from "../Components/Common/BreadCumb";
import ScrollToTop from "../Components/Common/ScrollToTop";
import ContactInfo from "../Components/ContactInfo/ContactInfo";

const ContactPage = () => {
    return (
        <div>
            <ScrollToTop />
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Contact Us"
            ></BreadCumb> 
            <ContactInfo></ContactInfo>            
        </div>
    );
};

export default ContactPage;