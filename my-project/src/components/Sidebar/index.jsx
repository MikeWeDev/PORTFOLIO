import './index.scss'
import LogoS from '../../assets copy/images/logo-s.png'
import LogoSubtitile from "../../assets copy/images/logo_sub.png"
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome,faUser,faEnvelope, faEarth, faWon, faPallet, faBook} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
function Sidebar() {
  return (
    <div className='nav-bar'>
       <Link className="Logo" to="/">
        <span className="Logo">M</span>
       </Link>
       <nav>
       <NavLink exact="true"
        activeclassname="active" to="/">
        
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="about-link"
        activeclassname="active" to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="contact-link"
       activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
       </NavLink>
       <NavLink exact="true" className="portfolio-link"
       activeclassname="active" to="/portfolio">
        <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
       </NavLink>
      </nav>
      <ul>
        <li>
          <a href="" target='_blank'>
      <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href="" target='_blank'>
      <FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a href="" target='_blank'>
      <FontAwesomeIcon className='anchor-icon' icon={faSkype} color='#4d4d4e' />
          </a>
        </li>
       
        
      </ul>
    </div>
   
  )
}

export default Sidebar
