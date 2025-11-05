import { useContext } from 'react';


//COMPONENTS
import Banner from "../components/Banner/Banner";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// CONTEXT
import { AppContext } from '../contexts/AppContext';

export default function Home(){
    
    const appContext = useContext(AppContext)
    
    return(
        <>
            <Header></Header>
            <Banner title={appContext.languages[appContext.language].menu.projects} image="bg-projects.jpg"/>
            
            
            <div className="container">
                <ProjectsList />
            </div>


            <Footer></Footer>
        </>
    )
}