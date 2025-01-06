import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./GetInvolved.module.scss";

const GetInvolved = () => {
  return (
    <div className={styles.getInvolved}>
      <Layout route="GetInvolved">
        <ContentSection>
          <h1>Software-Entwickler*in für Projekt “Alli App” gesucht</h1>
          <p>zum frühestmöglichen Zeitpunkt</p>
          <p>
            Alli ist ein personalisierter und empathischer Wegbegleiter für die
            medikamentöse Schwangerschaftsbeendigung. Aktuell befindet sich die
            Alli noch in der Entwicklungsphase. Zur weiteren Fertigstellung
            suchen wir nach motivierten Entwickler*innen.
          </p>
        </ContentSection>
        <ContentSection>
          <h2>Was ist die Alli App? </h2>
          <p>
            Themen wie Schwangerschaftsabbrüche und Fehlgeburten sind leider in
            unserer Gesellschaft noch sehr tabuisiert. Es ist nicht so leicht,
            gute und medizinisch korrekte Informationen dazu zu finden, dabei
            ist der Bedarf sehr groß. Die Begleit-App soll sowohl Patient*innen
            als auch Ärzt*innen unterstützen, informieren und empowern. Alli
            begleitet Patient*innen während des gesamten Prozesses ihrer
            Schwangerschaftsbeendigung. Dort werden sie täglich über
            bevorstehende Schritte, Möglichkeiten zur Behandlung von
            Nebenwirkungen und Antworten auf häufig gestellte Fragen informiert.
            Unser Ziel ist, den Betroffenen damit die notwendigen medizinisch
            korrekten Informationen verständlich und niederschwellig zur
            Verfügung zu stellen.{" "}
          </p>
        </ContentSection>
        <ContentSection>
          <h2>Wer sind wir? </h2>
          <p>
            Hinter Alli steckt ein bisher kleines interdisziplinäres
            FLINTA*-Team: 2 Ärztinnen, eine Designerin und eine
            Softwareentwicklern. Auch wenn wir alle in Berlin sitzen, arbeiten
            wir vorrangig digital und asynchron. Aktuell arbeiten wir alle
            ehrenamtlich.
          </p>
        </ContentSection>
        <ContentSection>
          <h2>Wie weit ist die Entwicklung bereits fortgeschritten?</h2>
          <p>
            Die Entwicklung der App begann 2022 und konnte maßgeblich dank der
            Förderung durch den Prototype Fund (BMBF) vom September 2022 bis
            Februar 2023 voranschreiten. Seitdem arbeiten wir ehrenamtlich und
            bewerben uns parallel um weitere Fördermittel.
          </p>
        </ContentSection>
        <ContentSection>
          <h2>Wen suchen wir?</h2>
          <p>
            Wir sind auf der Suche nach einer/ mehreren
            FLINTA*-Entwickler*innen, die uns bei unserem Projekt unterstützen
            möchten.
          </p>
          <h3>Aufgaben</h3>
          <ul>
            <li>Weiterentwicklung der App </li>
            <li> Planung und Umsetzung von Features </li>
            <li>Absprache und Zusammenarbeit mit unserer Designerin</li>
            <li>Unser Tech Stack besteht derzeit aus:</li>
            <ul>
              <li>React Native, Expo und Jotai</li>
              <li>Contentful </li>
              <li>Figma</li>
            </ul>
            <li>
              ggf. wenn Interesse: organisatorische Aufgaben, Unterstützung bei
              Beantragung/ Bewerbung von Fördermitteln{" "}
            </li>
            <li>
              ggf. wenn Interesse: Weiterentwicklung des Designs und Entwurfs in
              Figma{" "}
            </li>
          </ul>
          <h3>Vorraussetzungen</h3>
          <ul>
            <li>
              Programmiererfahrung, idealerweise im Bereich App Development
            </li>
            <li> Erfahrung mit unserem Tech Stack ist wünschenswert </li>
            <li> Erfahrung im Bereich UI/UX Design ist wünschenswert </li>
          </ul>
        </ContentSection>
        <ContentSection>
          <h2>Haben wir Interesse geweckt?</h2>
          <p>
            Dann freuen wir uns auf Deine E-Mail an{" "}
            <a
              href="mailto:team@alli-app.com"
              aria-label="Send us a mail"
              className={styles.link}
            >
              team@alli-app.com
            </a>
            !
            <br />
            Gerne kannst du schon angeben, wie deine zeitlichen Kapazitäten
            aussehen und ob du kurz- oder längerfristig als Teammitglied zur
            Verfügung stehen würdest. Wir melden uns dann bei Dir für ein
            zeitnahes informelles Kennenlerngespräch.
          </p>
        </ContentSection>
        <ContentSection>
          <h2>Noch Fragen? Lass es uns wissen!</h2>
          <p>
            Bei Fragen sind wir jederzeit über{" "}
            <a
              href="mailto:team@alli-app.com"
              aria-label="Send us a mail"
              className={styles.link}
            >
              team@alli-app.com
            </a>{" "}
            zu erreichen.
          </p>
        </ContentSection>
      </Layout>
    </div>
  );
};

export default GetInvolved;
