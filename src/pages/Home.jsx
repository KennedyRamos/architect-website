//COMPONENTS
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function Home(){
    return(
        <>
            <Header></Header>
            <h1>Home</h1>
            <Button buttonStyle="primary" arrow>Olá!</Button>
            <Footer></Footer>
        </>
    )
}