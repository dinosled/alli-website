import AlliTitle from "../AlliTitle";
import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Home.module.scss"
import app_banner from "../../assets/images/app-banner.png"
import PlayStoreButton from "../../assets/images/PlayStoreButton.svg"
import AppStoreButton from "../../assets/images/AppStoreButton.svg"

const Home = () => {
    return(
        <div className={styles.home}>
        <Layout route="Startseite">
            <ContentSection>
                <p><AlliTitle className={"alliTitleHome"}/> ist Deine digitale Begleitung für die medi&shy;kamen&shy;töse Schwanger&shy;schafts&shy;beendigung. Sie führt Dich <em className={styles.emphasized}>sicher</em>, <em className={styles.emphasized}>klar</em> und <em className={styles.emphasized}>verlässlich</em> Schritt für Schritt durch den Prozess und fasst alle wichtigen, notwendigen Informationen zusammen.</p>
            </ContentSection>
            <ContentSection>
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
            <ContentSection>
                <h2>Download</h2>
                <img className={styles.img} src={app_banner} alt="Ein Banner, dass die App auf einem mobilen Endgerät darstellt." />
                <div className={styles.imgContainer}>
                    <a href="https://play.google.com/store/apps/details?id=de.doctorsforchoice.alli">
                        <img
                            alt="Android App aus dem Google Play Store herunterladen"
                            src={PlayStoreButton}
                        />
                    </a>
                    <a href="https://apps.apple.com/us/app/alli/id6737808794">
                        <img
                            src={AppStoreButton}
                            alt="iOS App aus dem Apple Store herunterladen"
                        />
                    </a>
                </div>
            </ContentSection>
        </Layout>
        </div>
      )
  }
export default Home;
