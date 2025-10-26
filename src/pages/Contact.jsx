//COMPONENTS
import ContactForm from "../components/ContactForm/ContactForm";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Header></Header>
            <Banner title="Contact" image="bg-contact.jpg"/>
            
            
            <div className="container">
                <ContactForm />
            </div>


            <Footer></Footer>
        </>
    )
}