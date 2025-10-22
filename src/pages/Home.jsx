//COMPONENTS
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function Home(){
    return(
        <>
            <Header></Header>
            <div className="container">
                <Hero />
            </div>
            <Banner title="home" image="bg-abaut.jpg"/>
            <Footer></Footer>
        </>
    )
}