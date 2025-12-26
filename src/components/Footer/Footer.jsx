import { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import LogoName from '../../assets/logo-with-name.svg'
import BrazilIcon from '../../assets/brazil-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import WhatsappIcon from '../../assets/whatsapp-icon.svg'
import GithubIcon from '../../assets/github-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import Button from '../Button/Button'

import { AppContext } from '../../contexts/AppContext'

export default function Footer(){
  const appContext = useContext(AppContext)

  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }

  return(
    <footer>
      <div className="container">

        <div className="footer-main d-flex fd-column">

          <div className="footer-logo-col">
            <img src={LogoName} className="footer-logo" />
            <p>{appContext.languages[appContext.language].general.footerLogoText}</p>

            <div className="social-links d-flex">
              <a target="_blank" href="https://wa.me/5581979161344"><img src={WhatsappIcon} /></a>
              <a target="_blank" href="https://github.com/KennedyRamos"><img src={GithubIcon} /></a>
              <a target="_blank" href="https://www.linkedin.com/in/devkennedyramos/"><img src={LinkedinIcon} /></a>
            </div>
          </div>

          <div className="footer-links d-flex fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                <li><Link to="/Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.contact}</h3>
              <p>Jardim Jordão - Jaboatão dos Guararapes | Pernambuco</p>
              <p>devnedy@gmail.com</p>
              <p>(81) 97916-1344</p>
            </div>
          </div>

        </div>

        <div className="footer-copy d-flex fd-column">
          <p>Copyright © Dev Kennedy Ramos - 2025</p>

          <div className="langs-area d-flex">
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