import { Link } from 'react-router-dom';

// ASSETS
import './Footer.css'
import LogoName from '../../assets/logo-with-name.svg';
import BrazilIcon from '../../assets/brazil-icon.svg';
import UsaIcon from '../../assets/usa-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                
                <div className='d-flex jc-between'>
                    
                    <div className='footer-logo-col'>
                        <img src={LogoName} className='footer-logo'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet veniam nulla deleniti a culpa!</p>
                        
                        <div className='d-flex jc-between'>
                            <a target='_blank' href="#">
                                <img src={FacebookIcon} />
                            </a>
                            <a target='_blank' href="#">
                                <img src={InstagramIcon} />
                            </a>
                            <a target='_blank' href="#">
                                <img src={LinkedinIcon} />
                            </a>
                        </div>     
                    </div>

                    <div className='d-flex'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Projects">Projects</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p>Jardim Jordão - Jaboatão dos guararapes |Pernambuco</p>
                            <p>devnedy@gmail.com</p>
                            <p>(81) 97916-1344</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex jc-between footer-copy'>
                    <p>Copyright © Dev Kennedy Ramos - 2025</p>
                    <div className='langs-area d-flex'>
                        <img src={BrazilIcon} />
                        <img src={UsaIcon} />
                    </div>
                </div>
                
            </div>
        </footer>
    )
}