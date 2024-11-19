import React from "react";
// import { ReactComponent as GitIcon } from '/assets/githubicon.svg';
// import { ReactComponent as LinkedinIcon } from '../../assets/LinkedIn_icon.svg';
// import { ReactComponent as BehanceIcon } from '../../assets/behance-2.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="date">2024</span>
            <span className="footer-text">Made with love by Bartek Filipiuk </span>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/bartłomiej-filipiuk-599304253/" target="_blank" rel="noreferrer"><img src="LinkedIn_icon.svg" className="footer-linkedin-icon" /></a>
                <a href="https://github.com/bfilipiuk" target="_blank" rel="noreferrer"><img src="githubicon.svg" className="footer-git-icon" /></a>
                <a href="https://www.behance.net/bartekfilipiuk" target="_blank" rel="noreferrer"><img src="behance-2.svg" className="footer-behance-icon" /></a>
            </div>
        </div>
    );
}

export default Footer;