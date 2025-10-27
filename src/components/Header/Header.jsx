import { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Button from '../Button/Button';

// ASSETS
import './Header.css';
import Logo from '../../assets/logo.svg';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <header>
            <div className="container">
                
                <div className="d-flex jc-between al-center">
                    <Link to="/"><img src={Logo} alt="Logo Dev Kennedy Ramos" /></Link>
                    
                    <div className='mobile-menu'>
                        <Button buttonStyle="secondary" onClick={toggleMenu}>Menu</Button>
                    </div>
                    
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className='mobile-menu close-btn' onClick={toggleMenu}> X </Button>

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