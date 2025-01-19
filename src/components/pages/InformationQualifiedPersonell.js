import flyerDigital from "../../assets/files/alli_app-flyer-digital.pdf"
import flyerPrint from "../../assets/files/alli_app-flyer-print.pdf"
import ContentSection from "../ContentSection";
import Layout from "../Layout";

const Information = () => {
    return (
      <Layout route="Informationen für Fachkreise">
        <ContentSection>
          <p>Sie begleiten Patient*innen bei einer medikamentösen Schwangerschaftsbeendigung? Gerne können Sie auf die App Alli aufmerksam machen!</p>
          <p>Alli dient als zusätzlicher Wegbegleiter für Ihre Patient*innen im Verlauf der Schwangerschaftsbeendigung. In der App erhalten Ihre Patient*innen alle notwendigen Informationen über den Ablauf, die Medikamente und mögliche Nebenwirkungen oder Risiken. Sie werden außerdem während des Prozesses – zeitlich abgestimmt – auf mögliche Veränderungen, Begleiterscheinungen und Komplikationen vorbereitet und über mögliche notwendige Maßnahmen informiert. Dadurch soll die Autonomie und Selbstbestimmung der Patient*innen im Sinne einer informierten Entscheidungsfindung gestärkt werden.</p>
          <p>Alli wurde von einem ärztlichen Expertinnen-Team entwickelt. Die Inhalte sind wissenschaftlich fundiert und orientieren sich an den internationalen Leitlinien der amerikanischen (ACOG), britischen (RCOG) und deutschen (DGGG) gynäkologischen Fachgesellschaften sowie den Empfehlungen der Weltgesundheitsorganisation.</p>
          <p>Wir freuen uns über Ihr Feedback und Verbesserungsvorschläge unter der Rubrik “Feedback”!</p>
          <h2>Materialien</h2>
          <h3>Flyer</h3>
          <p>Für einen einfachen Zugang zur App bieten wir Download-Flyer zum Druck an, auf denen die Patient*innen nur einen QR-Code mit ihrem Handy scannen müssen:</p>
          <a href={flyerDigital} download={"Alli-App-Flyer-Digital.pdf"}>Einzelner Flyer</a>
          <a href={flyerPrint} download={"Alli-App-Flyer-Print.pdf"}>Print-Version: vier Flyer pro Seite</a>
          <h3>Visitenkarten</h3>
          <p>Gerne schicken wir Ihnen auch Alli-Visitenkarten (gegen eine kleine Spende) für die Praxis zu! Senden Sie uns dafür gerne eine Mail an <a href="mailto:buero@doctorsforchoice.de">buero@doctorsforchoice.de</a>.</p>
        </ContentSection>
      </Layout>
    )
}
export default Information;
