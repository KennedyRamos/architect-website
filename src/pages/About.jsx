import { useContext } from 'react';

//COMPONENTS
import AboutText from "../components/AboutText/AboutText";
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
            <Banner title={appContext.languages[appContext.language].menu.about} image="bg-abaut.jpg"/>
            
            
            <div className="container">
                <AboutText />
            </div>


            <Footer></Footer>
        </>
    )
}