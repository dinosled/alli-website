import Layout from "../Layout";
import styles from "./Feedback.module.scss";
import ContentSection from "../ContentSection";

const Feedback = () => {
    return(
        <div className={styles.aboutAlli}>
        <Layout route="Feedback">
            <ContentSection>
            <h1>Feedback</h1>
                <p></p>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default Feedback;