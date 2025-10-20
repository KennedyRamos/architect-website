import { Link } from 'react-router-dom';

// ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

export default function Header(){
    return(
        <header>
            <div className="container">
                
                <div className="d-flex jc-between al-center">
                    <Link to="/"><img src={Logo} alt="Logo Dev Kennedy Ramos" /></Link>
                    <nav>
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                

            </div>
        </header>
    )
}