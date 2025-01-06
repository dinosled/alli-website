import AlliTitle from "../AlliTitle";
import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Home.module.scss"

const Home = () => {
    return(
        <div className={styles.home}>
        <Layout route="Startseite">
            <ContentSection>
                <p><AlliTitle className={"alliTitleHome"}/> ist Deine digitale Begleitung für die medi&shy;kamen&shy;töse Schwanger&shy;schafts&shy;beendigung. Sie führt Dich <em className={styles.emphasized}>sicher</em>, <em className={styles.emphasized}>klar</em> und <em className={styles.emphasized}>verlässlich</em> Schritt für Schritt durch den Prozess und fasst alle wichtigen, notwendigen Informationen zusammen.</p>
                <h2>
                Das bietet Alli:
                </h2>
                <ul>
                    <li>
                        <b>Medizinisch korrekt:</b> Alli bereitet internationale Leitlinien und aktuelle wissenschaftliche Empfehlungen gut verständlich auf.
                    </li>
                    <li>
                        <b>Genderinklusiv:</b> Alli ist für alle Menschen, die schwanger werden können.
                    </li>
                    <li>
                        <b>Datensicher:</b> Deine Daten werden lokal auf dem Gerät gespeichert und nicht weitergegeben.
                    </li>
                </ul>
            </ContentSection>
        </Layout>
        </div>
      )
  }
export default Home;
