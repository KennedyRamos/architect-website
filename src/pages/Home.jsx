//COMPONENTS
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function Home(){
    return(
        <>
            <Header></Header>
            <h1>Home</h1>
            <Banner title="home" image="bg-abaut.jpg"/>
            <Button buttonStyle="primary" arrow>Olá!</Button>
            <Footer></Footer>
        </>
    )
}