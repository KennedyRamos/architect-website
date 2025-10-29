//COMPONENTS
import ProjecstList from "../components/ProjectsList/ProjectsList";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Header></Header>
            
            <div className="container">
                <Hero />
                <ProjecstList />
            </div>

            <Footer></Footer>
        </>
    )
}