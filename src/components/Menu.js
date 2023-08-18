import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import styles from "./Menu.module.scss"
import Route from './Route';

const Menu = ({isMenuOpen, setIsMenuOpen}) => {
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
            <div className={styles.menu} style={{ display: isMenuOpen ? "inline-block" : "none" }}>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">About us</a></li>
                        {/* <li><a href="/insights">Informative Insights</a></li> */}
                        {/* <li><a href="/participate">Get involved</a></li> */}
                        {/* <li><a href="/contact">Contact & Imprint</a></li> */}
                    </ul>
                </nav>
                <Route route="Menu"/>
            </div>
        </div>
    )
}

export default Menu;