import React from 'react';
import BmbfLogo from '../assets/images/logo_BMBF.svg';

const Footer = () => {
    return (
        <footer>
            <h2>Funded by</h2>
            <div>
                <a href="https://www.bmbf.de/bmbf/de/home/home_node.html" target="_blank" rel="noreferrer" aria-label="Open Website of BmBF">
                    <img src={BmbfLogo} alt="Logo of Bundesministerium für Bildung und Forschung (BMBF)" />
                </a>
                <a href="https://prototypefund.de/" target="_blank" rel="noreferrer" aria-label="Open website of Prototypefund">
                    <img src={require('../assets/images/logo_prototypefund.png')} alt="Logo of Prototypefund" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;