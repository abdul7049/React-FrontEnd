import React, { useEffect, useState } from 'react';
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../../images/weblogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isMobile,setIsMobile]=useState(false);

	const [scrolled, setScrolled] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
	return (
		<>
		<header className={scrolled ? 'onscroll' : ''}>
		  <div className={isMobile?'nav-mobile-menu':'nav_menu'}>
			<div className='head_logo'>
			  <img src={logo} alt="Logo" className='logo'/>
			</div>
			<div className={isMobile?'nav-mobile-right':'nav_right'}>
			  <ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/contact">Contact Us</Link></li>
				<li><Link to="/products">Products</Link></li>
				<li><Link to="/poolgallary">Pool Gallary</Link></li>
			  </ul>
			  <button className='mobile-menu-icon'onClick={() => setIsMobile(!isMobile)}
>
				{isMobile?<i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
			  </button>
			</div>
		  </div>
		</header>
	  </>
	)
}

export default Header
