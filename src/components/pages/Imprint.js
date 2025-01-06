import Layout from "../Layout";
import styles from "./Imprint.module.scss";
import ContentSection from "../ContentSection";

const Imprint = () => {
    return(
        <div className={styles.aboutAlli}>
        <Layout route="Impressum">
            <ContentSection>
            <div className={styles.section}>
                <h1>Impressum</h1>
                <p>
                Doctors for Choice Germany e.V. – Franz-Ehrlich-Str. 12, 12489 Berlin
                </p>
                <h1>Credits</h1>
                {/* <h2>Graphics:</h2>
                <p>
                We utilize illustrations from{" "}
                <a
                    href="https://undraw.co/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to undraw.co"
                    className={styles.link}
                >
                    unDraw.co{" "}
                </a>{" "}
                and are incredibly grateful for the open-source illustrations they
                provide.
                </p> */}
                {/* <h2>Icons:</h2> */}
                <p>
                Wir benutzen Icons von Font Awesome,
                created by Dave Gandy -{" "}
                <a
                    href="https://fontawesome.com/"
                    aria-label="Link to fontawesome.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    fontawesome.com
                </a>
                </p>
                <h1>Haftungsausschluss</h1>
                <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <h1>Urheberrecht</h1>
                <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default Imprint;
