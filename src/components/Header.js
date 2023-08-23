import { useEffect, useRef, useState } from "react";
import AlliTitle from "./AlliTitle";
import styles from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Route from './Route';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const prevScrollY = useRef(window.scrollY);
    const ticking = useRef(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsScrollingUp(currentScrollY < prevScrollY.current);
        prevScrollY.current = currentScrollY;
      };
  
      const throttledHandleScroll = () => {
        if (!ticking.current) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking.current = false;
          });
          ticking.current = true;
        }
      };
  
      window.addEventListener('scroll', throttledHandleScroll);
      return () => {
        window.removeEventListener('scroll', throttledHandleScroll);
      };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className={styles.header} style={{ position: (isMenuOpen || isScrollingUp ) && "fixed" }}>
                <div className={styles.title}>
                    <AlliTitle/>
                </div>
                <div className={styles.burgerContainer}>
                    <button onClick={toggleMenu} className={styles.burgerMenu} aria-label="Open the menu">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faX} aria-hidden="true" style={{ display: isMenuOpen ? "inline" : "none" }}/>
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} aria-hidden="true" style={{ display: isMenuOpen ? "none" : "inline" }}/>
                    </button>
                </div>  
            </div>
            <div className={styles.menu} style={{ display: isMenuOpen ? "inline-block" : "none" }}>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">About us</a></li>
                        {/* <li><a href="/insights">Informative Insights</a></li> */}
                        {/* <li><a href="/participate">Get involved</a></li> */}
                        <li><a href="/contact">Contact & Imprint</a></li>
                    </ul>
                </nav>
                <Route route="Menu"/>
            </div>
        </>
    )
}

export default Header;