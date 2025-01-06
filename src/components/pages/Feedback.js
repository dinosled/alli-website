import Layout from "../Layout";
import styles from "./Feedback.module.scss";
import ContentSection from "../ContentSection";

const Feedback = () => {
    return(
        <div className={styles.aboutAlli}>
        <Layout route="Feedback">
            <ContentSection>
            <h1>Feedback</h1>
                <p>Bei Fragen, Feedback oder Verbesserungsvorschlägen zur App freuen wir uns über eine Mail an <a href="mailto:team@alli-app.com" aria-label="Send us a mail" className={styles.mailSection}>team@alli-app.com</a>. Ebenfalls sind wir über jede Rückmeldungen, falls es während der Benutzung der App zu Fehlermeldungen oder Ähnliches gekommen sein sollte (am besten mit Screenshot und Angabe des Betriebssystems).</p>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default Feedback;