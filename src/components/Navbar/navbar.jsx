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
            case 'about': return '-67%';
            case 'projects': return '66%';
            case 'writings': return '201%';
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
                <li><Link className={activeLink === 'start' ? 'active' : ''} to="start" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('start')} onClick={() => handleClick('start')}>Start</Link></li>
                <li><Link className={activeLink === 'about' ? 'active' : ''} to="about" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('about')} onClick={() => handleClick('about')}>O mnie</Link></li>
                <li><Link className={activeLink === 'projects' ? 'active' : ''} to="projects" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('projects')} onClick={() => handleClick('projects')}>Projekty</Link></li>
                <li><Link className={activeLink === 'writings' ? 'active' : ''} to="writings" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('writings')} onClick={() => handleClick('writings')}>Artykuły</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

