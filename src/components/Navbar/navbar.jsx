import React, { useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState('start');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const backgroundAppear = () => {
        console.log(window.scrollY);

        if (window.scrollY > 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', backgroundAppear);

    // const calculateTransform = () => {
    //     switch(activeLink) {
    //         case 'start': return '-200%';
    //         case 'about': return '-67%';
    //         case 'projects': return '66%';
    //         case 'contact': return '201%';
    //         default: return 0;
    //     }
    // };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Usuń event listener przy odmontowywaniu komponentu
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const calculateTransform = () => {
        if (windowWidth <= 640) {
            // Tu umieść zmienione wartości dla ekranów mniejszych niż 640px
            switch(activeLink) {
                case 'start': return '-147%'; // Przykładowa zmieniona wartość
                case 'about': return '-52%';
                case 'projects': return '50%';
                case 'contact': return '148%';
                default: return 0;
            }
        } else {
            // Oryginalne wartości dla ekranów większych niż 640px
            switch(activeLink) {
                case 'start': return '-200%';
                case 'about': return '-67%';
                case 'projects': return '66%';
                case 'contact': return '201%';
                default: return 0;
            }
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
                <li><Link className={activeLink === 'about' ? 'active' : ''} to="about" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('about')} onClick={() => handleClick('about')}>About</Link></li>
                <li><Link className={activeLink === 'projects' ? 'active' : ''} to="projects" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('projects')} onClick={() => handleClick('projects')}>Projects</Link></li>
                <li><Link className={activeLink === 'contact' ? 'active' : ''} to="contact" spy={true} smooth={true} offset={-70} duration={1000} onSetActive={() => setActiveLink('contact')} onClick={() => handleClick('contact')}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

