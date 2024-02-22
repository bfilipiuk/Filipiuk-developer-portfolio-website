import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState('start');

    const backgroundAppear = () => {
        console.log(window.scrollY);

        if (window.scrollY > 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', backgroundAppear);

    const calculateTransform = () => {
        switch(activeLink) {
            case 'start': return '-200%';
            case 'oMnie': return '-67%';
            case 'projekty': return '66%';
            case 'artykuly': return '201%';
            default: return 0;
        }
    };

    const handleClick = (id) => {
        setActiveLink(id);
    };

    return (
        <nav className={navbar ? 'navbar-active' : 'navbar'}>
            <div className="backgroundIndicator" style={{ transform: `translateX(${calculateTransform()})` }}></div>
            <ul>
                <li><Link className={activeLink === 'start' ? 'active' : ''} to="start" spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleClick('start')}>Start</Link></li>
                <li><Link className={activeLink === 'oMnie' ? 'active' : ''} to="oMnie" spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleClick('oMnie')}>O mnie</Link></li>
                <li><Link className={activeLink === 'projekty' ? 'active' : ''} to="projekty" spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleClick('projekty')}>Projekty</Link></li>
                <li><Link className={activeLink === 'artykuly' ? 'active' : ''} to="artykuly" spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleClick('artykuly')}>Artykuły</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

