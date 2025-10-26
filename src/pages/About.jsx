//COMPONENTS
import AboutText from "../components/AboutText/AboutText";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Header></Header>
            <Banner title="About us" image="bg-abaut.jpg"/>
            
            
            <div className="container">
                <AboutText />
            </div>


            <Footer></Footer>
        </>
    )
}