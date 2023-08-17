import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import styles from "./Menu.module.scss"

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <div className={styles.burgerContainer}>
                <button onClick={toggleMenu} className={styles.burgerMenu} aria-label="Open the menu">
                        <FontAwesomeIcon className={styles.menuIcon} icon={faX} aria-hidden="true" style={{ display: isMenuOpen ? "inline" : "none" }}/>
                        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} aria-hidden="true" style={{ display: isMenuOpen ? "none" : "inline" }}/>
                </button>
            </div>
                <nav className={styles.menu} style={{ display: isMenuOpen ? "inline-block" : "none" }}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About us</a></li>
                    {/* <li><a href="/insights">Informative Insights</a></li> */}
                    {/* <li><a href="/participate">Get involved</a></li> */}
                    {/* <li><a href="/contact">Contact & Imprint</a></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Menu;