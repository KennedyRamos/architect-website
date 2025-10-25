//COMPONENTS
import ProjectList from "../components/ProjectList/ProjectsList";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Header></Header>
            
            <div className="container">
                <Hero />
                <ProjectList />
            </div>

            <Footer></Footer>
        </>
    )
}