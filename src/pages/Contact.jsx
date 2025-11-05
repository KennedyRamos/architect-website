import { useContext } from 'react';

//COMPONENTS
import ContactForm from "../components/ContactForm/ContactForm";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// CONTEXT
import { AppContext } from '../contexts/AppContext';

export default function Home(){
    const appContext = useContext(AppContext)
    
    return(
        <>
            <Header></Header>
            <Banner title={appContext.languages[appContext.language].menu.contact} image="bg-contact.jpg"/>
            
            
            <div className="container">
                <ContactForm />
            </div>


            <Footer></Footer>
        </>
    )
}