import { useEffect, useRef, useState } from "react";
import AlliTitle from "./AlliTitle";
import styles from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Route from './Route';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
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
            <header className={styles.header} style={{ position: (isMenuOpen || isScrollingUp ) && "fixed" }}>
                <div className={styles.title}>
                    <AlliTitle/>
                </div>
                <div className={styles.burgerContainer}>
                    <button onClick={toggleMenu} className={styles.burgerMenu} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close the menu" : "Open the menu"}>
                            <FontAwesomeIcon className={styles.menuIcon} icon={faX} aria-hidden="true" style={{ display: isMenuOpen ? "inline" : "none" }}/>
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} aria-hidden="true" style={{ display: isMenuOpen ? "none" : "inline" }}/>
                    </button>
                </div>  
            </header>
            <div className={styles.menu} style={{ display: isMenuOpen ? "inline-block" : "none" }}>
                <nav aria-label="Main menu">
                    <ul>
                        <li><button aria-label="Go to Page: Home" onClick={()=>{navigate("/")}}>Home</button></li>
                        <li><button aria-label="Go to Page: Projects" onClick={()=>{navigate("/projects")}}>Projects</button></li>
                        <li><button aria-label="Go to Page: About us" onClick={()=>{navigate("/about")}}>About us</button></li>
                        <li><button aria-label="Go to Page: Contact & Imprint" onClick={()=>{navigate("/contact")}}>Contact & Imprint</button></li>
                    </ul>
                </nav>
                <Route route="Menu"/>
            </div>
        </>
    )
}

export default Header;