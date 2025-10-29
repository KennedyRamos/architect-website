//COMPONENTS
import Banner from "../components/Banner/Banner";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
            <Header></Header>
            <Banner title="Projects" image="bg-projects.jpg"/>
            
            
            <div className="container">
                <ProjectsList />
            </div>


            <Footer></Footer>
        </>
    )
}