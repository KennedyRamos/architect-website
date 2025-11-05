import { useContext } from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './Footer.css'
import LogoName from '../../assets/logo-with-name.svg';
import BrazilIcon from '../../assets/brazil-icon.svg';
import UsaIcon from '../../assets/usa-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

// CONTEXT
import { AppContext } from '../../contexts/AppContext';
import Button from '../Button/Button';

export default function Footer(){
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return(
        <footer>
            <div className="container">
                
                <div className='d-flex jc-between .mobile-fd-column'>
                    
                    <div className='footer-logo-col'>
                        <img src={LogoName} className='footer-logo'/>
                        <p>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        
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

                    <div className='d-flex .mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p>Jardim Jordão - Jaboatão dos guararapes |Pernambuco</p>
                            <p>devnedy@gmail.com</p>
                            <p>(81) 97916-1344</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex jc-between footer-copy'>
                    <p>Copyright © Dev Kennedy Ramos - 2025</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrazilIcon} />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={UsaIcon} />
                        </Button>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}