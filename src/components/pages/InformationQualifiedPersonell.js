import flyerDigital from "../../assets/files/alli_app-flyer-digital.pdf"
import flyerPrint from "../../assets/files/alli_app-flyer-print.pdf"
import businessCards from "../../assets/files/alli_app-business-cards.pdf"
import qrAppStore from "../../assets/images/alli_app-qr-app_store.png"
import qrPlayStore from "../../assets/images/alli_app-qr-google_play_store.png"
import PlayStoreButton from "../../assets/images/PlayStoreButton.svg"
import AppStoreButton from "../../assets/images/AppStoreButton.svg"
import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./InformationQualifiedPersonell.module.scss"

const Information = () => {
    return (
      <Layout route="Informationen für Fachkreise">
        <ContentSection>
          <p>Sie begleiten Patient*innen bei einer medikamentösen Schwangerschaftsbeendigung? Gerne können Sie auf die App Alli aufmerksam machen!</p>
          <p>Alli dient als zusätzlicher Wegbegleiter für Ihre Patient*innen im Verlauf der Schwangerschaftsbeendigung. In der App erhalten Ihre Patient*innen alle notwendigen Informationen über den Ablauf, die Medikamente und mögliche Nebenwirkungen oder Risiken. Sie werden außerdem während des Prozesses – zeitlich abgestimmt – auf mögliche Veränderungen, Begleiterscheinungen und Komplikationen vorbereitet und über mögliche notwendige Maßnahmen informiert. Dadurch soll die Autonomie und Selbstbestimmung der Patient*innen im Sinne einer informierten Entscheidungsfindung gestärkt werden.</p>
          <p>Alli wurde von einem ärztlichen Expertinnen-Team entwickelt. Die Inhalte sind wissenschaftlich fundiert und orientieren sich an den internationalen Leitlinien der amerikanischen (ACOG), britischen (RCOG) und deutschen (DGGG) gynäkologischen Fachgesellschaften sowie den Empfehlungen der Weltgesundheitsorganisation.</p>
          <p>Wir freuen uns über Ihr Feedback und Verbesserungsvorschläge unter der Rubrik “Feedback”!</p>
          <h2>Materialien</h2>
            <p>Zur Verbreitung des Wissens sind wir auf Sie als unser Netzwerk angewiesen! Zur Hilfestellung bieten wir Ihnen hier eine Reihe an Materialien, die Sie nutzen können, um über Alli zu informieren. Die Nutzung ist damit ausdrücklich erwünscht.</p>
          <h3>Flyer</h3>
          <p>Für einen einfachen Zugang zur App bieten wir Download-Flyer zum Druck an, auf denen die Patient*innen nur einen QR-Code mit ihrem Handy scannen müssen:</p>
            <p><a href={flyerDigital} download={"Alli-App-Flyer-Digital.pdf"}>Einzelner Flyer</a></p>
            <p><a href={flyerPrint} download={"Alli-App-Flyer-Print.pdf"}>Print-Version: vier Flyer pro Seite</a></p>
          <h3>QR-Codes</h3>
            <p>Zur Gestaltung und Integration in Ihre eigenen Unterlagen bieten wir hier auch die QR-Codes allein an.</p>
            <div className={styles.imgContainer}>
              <img
                src={qrPlayStore}
                alt="QR Code zum Download für Android aus dem Google Play Store"
              />
              <img
                alt="Android App aus dem Google Play Store herunterladen"
                src={PlayStoreButton}
              />
              <img
                src={qrAppStore}
                alt="QR Code zum Download für iOS aus dem App Store"
              />
              <img
                src={AppStoreButton}
                alt="iOS App aus dem App Store herunterladen"
              />
            </div>
          <h3>Visitenkarten</h3>
          <p>Gerne schicken wir Ihnen auch Alli-Visitenkarten (gegen eine kleine Spende) für die Praxis zu! Senden Sie uns dafür gerne eine Mail an <a href="mailto:buero@doctorsforchoice.de">buero@doctorsforchoice.de</a>.</p>
          <p>Alternativ können Sie auch </p>
        </ContentSection>
      </Layout>
    )
}
export default Information;
