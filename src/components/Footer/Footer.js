import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faStar,faPhone,faEnvelope,faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import './Footer.css';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    // Function to scroll to the top when a link is clicked
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
<div className='footer px-3 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
  <div class="tag ">
    <h1>Contact</h1>
    <a href="#" className='center'><FontAwesomeIcon icon={faPhone} />&nbsp;03124025823</a>
    <a href="#" className='center text-nowrap'><FontAwesomeIcon icon={faEnvelope} />&nbsp;talibawan278@gmail.com</a>
    <a href="#" className='center'><FontAwesomeIcon icon={faLocationDot} />&nbsp;99-b Q Block Model Town</a>
  </div>
  <div class="tag">
    <h1>Get Help</h1>
    <Link to="/about" className='center ' onClick={scrollToTop} >About</Link>
    {/* <Link to="/projects" className='center' onClick={scrollToTop}>Projects</Link> */}
    <Link to='/experience' className="center" onClick={scrollToTop}>Experience</Link>
    <Link to='/skills' className="center" onClick={scrollToTop}>Skills</Link>
    <Link to='/contact' className='center' onClick={scrollToTop}>Conctact</Link>

  </div>
  <div class="tag">
    <h1>Our Stores</h1>
    <a href="#" class="center">Pakistan</a>
    <a href="#" class="center">Australia</a>
    <a href="#" class="center">Afghanistan</a>
    <a href="#" class="center">USA</a>
  </div>
  <div class="tag">
    <h1 className=''>Follow Us</h1>
    <div class="footer_icon ">
    <a href="#"><img src={facebook} className='icon1 w-[33px] ' /></a>
    <a href="#"><img src={twitter} className='icon1 w-[17px]  mt-2 ml-[6px]' /></a>
    <a href="#"><img src={instagram} className='icon1 w-[17px]  mt-[6px] ml-[6px]' /></a>
    <a href="#"><img src={linkedin} className='icon1 w-[17px]  mt-[6px] ml-[6px]' /></a>
  </div>
</div>
  <div class="tag hidden sm:block  ">
    <h1>Newsletter</h1>
    <div class="search_bar sm:mt-[39px] ">
    <span className='flex  lg:flex-col items-center'>
      <input type="text" placeholder="enter email" className='sm:ml-5 sm:-mt-2 lg:mt-1' />
      <div className='sm:ml-[60px] sm:-mt-[16px] lg:ml-0 lg:mt-2'><button type="submit" className=' lg:w-[110px] '>Subscribe</button></div></span>
    </div>
  </div>
</div>
  )
}

export default Footer
