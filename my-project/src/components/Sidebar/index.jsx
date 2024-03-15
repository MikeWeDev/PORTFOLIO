import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome,faUser,faEnvelope,faBook,faBars, faPhone} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
function Sidebar() {
  const [showNav, setShowNav] = useState(false);

  const telegramUserName="@Mikyyetklyelij"
  const githubUserName='https://github.com/dashboard'
  const linkdinUserName='https://www.linkedin.com/in/mikyas-negash-01b400263'

 
  const phoneNumber='0902464535'
  const handleDial =()=>{
    window.location.href=`tel:${phoneNumber}`
  }
  const telegramLink=`https://t.me/${telegramUserName}`;
  
  return (
    <div className='nav-bar'>
       <Link className="Logo" to="/">
        <span className="Logo">M</span>
       </Link>
       <nav className={showNav ? 'mobile-show' : ''}>
       <NavLink exact="true"
        activeclassname="active" to="/"
        onClick={() => setShowNav(false)}
      >
        
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="about-link"
        activeclassname="active" to="/about"
        onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="contact-link"
       activeclassname="active" to="/contact"
       onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="portfolio-link"
       activeclassname="active" to="/portfolio"
       onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
       </NavLink>
      </nav>
      <ul>
      <li>
          <a href={telegramLink} >
      <FontAwesomeIcon className='anchor-icon' icon={faTelegram} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href={linkdinUserName}>
      <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href={githubUserName}>
      <FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        
        <li>
          <a href={`tel:${phoneNumber}`}  onClick={handleDial}>
      <FontAwesomeIcon className='anchor-icon' icon={faPhone} color='#4d4d4e' />
          </a>
        </li>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
        
      </ul>
    </div>
   
  )
}

export default Sidebar
