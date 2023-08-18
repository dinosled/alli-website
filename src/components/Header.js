import { useState } from "react";
import AlliTitle from "./AlliTitle";
import styles from "./Header.module.scss"
import Menu from "./Menu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header} style={{ position: isMenuOpen && "fixed" }}>
            <div className={styles.title}>
                <AlliTitle/>
            </div>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </header>
    )
}

export default Header;