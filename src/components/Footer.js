import React from 'react';
import BmbfLogo from '../assets/images/logo_BMBF.svg';
import styles  from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.text}>Funded by</h2>
            <div className={styles.imgContainer}>
                <a href="https://prototypefund.de/" target="_blank" rel="noreferrer" aria-label="Open website of Prototypefund">
                    <img className={styles.img} src={require('../assets/images/logo_prototypefund.png')} alt="Logo of Prototypefund" />
                </a>
                <a href="https://www.bmbf.de/bmbf/de/home/home_node.html" target="_blank" rel="noreferrer" aria-label="Open Website of BmBF">
                    <img src={BmbfLogo} className={styles.img} alt="Logo of Bundesministerium für Bildung und Forschung (BMBF)" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;