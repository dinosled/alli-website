import styles from "./Content.module.scss"

const Content = ({text, image}) => {
    return(
        <div className={styles.contentSection}>
            {!!image && <div className={styles.image}>{image}</div>}
            {!! text && <div className={styles.text}>{text}</div>}
        </div>
    )
}

export default Content;