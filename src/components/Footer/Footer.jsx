import { Link } from 'react-router-dom';

// ASSETS
import './Footer.css'
import Logo from '../../assets/logo.svg';
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
                    
                    <div className='footerlogo-col'>
                        <img src={Logo} />
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
                
                </div>

            </div>
        </footer>
    )
}