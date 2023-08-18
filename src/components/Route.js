import styles from "./Route.module.scss";

const Route = ({route}) => {
    return(
        <div className={styles.banner}>
            {route}
        </div>
    )
}

export default Route;