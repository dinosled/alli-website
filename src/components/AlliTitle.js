import AlliLogo from '../assets/images/alli-logo.svg';
import styles from "./AlliTitle.module.scss"

const AlliTitle = () => {
    return (
        <span className={styles.alliTitle}>
            <img className={styles.logo} src={AlliLogo} alt="Logo of Alli" />
            <span className={styles.title}>Alli</span>
        </span>
    )
}

export default AlliTitle;