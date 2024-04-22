import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                    </li>
                </ul>
                <p className="copyright">© 2023 Ronnie Coleman. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;