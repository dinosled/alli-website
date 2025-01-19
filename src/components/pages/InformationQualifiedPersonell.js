import flyerDigital from "../../assets/files/alli_app-flyer-digital.pdf"
import flyerPrint from "../../assets/files/alli_app-flyer-print.pdf"
import ContentSection from "../ContentSection";
import Layout from "../Layout";

const Information = () => {
    return (
      <Layout route="Informationen für Fachkreise">
        <ContentSection>
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
