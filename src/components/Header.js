import AlliTitle from "./AlliTitle";
import styles from "./Header.module.scss"
import Menu from "./Menu";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <AlliTitle/>
            </div>
            <Menu/>
      </header>
    )
}

export default Header;