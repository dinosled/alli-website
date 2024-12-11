import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./SupportUs.module.scss";

const SupportUs = () => {
  return (
    <div className={styles.supportUs}>
      <Layout route="SupportUs">
        <ContentSection>
          <h1>Spenden</h1>
          <p>Alli ist und bleibt eine kostenfreie App und ist somit auf Spenden angewiesen. Eine App zu betreiben, kostet Zeit und Geld. Zudem sind weitere Aktualisierungen und Verbesserungen von Alli im Laufe der Zeit geplant. 
          Eine Spende hilft uns, laufende Betriebskosten der App zu decken, weitere App-Funktionen zu entwickeln, Design & Softwarentwicklung in Auftrag zu geben, im Rahmen von Fort- und Weiterbildungen sowie unserer Öffentlichkeitsarbeit die App bekannter zu machen und an alle Betroffenen heranzutragen.</p>
        </ContentSection>
        <ContentSection>
          <h1>Aktive Unterstützung</h1>
          <h2>Medizinisches Personal</h2>
          <p>Sie begleiten Patient*innen bei einer medikamentösen Schwangerschaftsbeendigung? Gerne können Sie auf die App Alli aufmerksam machen!</p>
          <p>Alli dient als zusätzlicher Wegbegleiter für Ihre Patient*innen im Verlauf der Schwangerschaftsbeendigung. In der App erhalten Ihre Patient*innen alle notwendigen Informationen über den Ablauf, die Medikamente und mögliche Nebenwirkungen oder Risiken. Sie werden außerdem während des Prozesses – zeitlich abgestimmt – auf mögliche Veränderungen, Begleiterscheinungen und Komplikationen vorbereitet und über mögliche notwendige Maßnahmen informiert. Dadurch soll die Autonomie und Selbstbestimmung der Patient*innen im Sinne einer informierten Entscheidungsfindung gestärkt werden.</p>
          <p>Alli wurde von einem ärztlichen Expertinnen-Team entwickelt. Die Inhalte sind wissenschaftlich fundiert und orientieren sich an den internationalen Leitlinien der amerikanischen (ACOG), britischen (RCOG) und deutschen (DGGG) gynäkologischen Fachgesellschaften sowie den Empfehlungen der Weltgesundheitsorganisation.</p>
          <p>Wir freuen uns über Ihr Feedback und Verbesserungsvorschläge unter der Rubrik “Feedback”!</p>
        </ContentSection>
        <ContentSection>
          <h2>Entwickler*in</h2>
          <p>Wir sind immer auf der Suche nach (vorrangig FLINTA*-) Entwickler*innen und Designer*innen, die uns bei unserem Projekt unterstützen möchten. Dabei geht es um den Erhalt der aktuellen Appversion und Unterstützung bei Updates oder Fehlerbehebung sowie langfristig ggf. der Entwicklung einer nächsten Version der App. Aktuell läuft dies auf ehrenamtlicher Basis – wir bemühen uns um weitere Fördermittel und Spendenakquise.</p>
          <p>Schreibe uns gerne per E-Mail an <a
              href="mailto:team@alli-app.com"
              aria-label="Send us a mail"
              className={styles.link}
            >
              team@alli-app.com
            </a>, wenn du Interesse hast!</p>
          <p>Gerne kannst du schon angeben, wie deine zeitlichen Kapazitäten aussehen und ob du kurz- oder längerfristig als Teammitglied zur Verfügung stehen würdest.</p>
        </ContentSection>
      </Layout>
    </div>
  );
};

export default SupportUs;
