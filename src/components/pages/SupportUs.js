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
