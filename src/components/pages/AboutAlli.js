import Layout from "../Layout";
import products_img_1 from '../../assets/images/products_img_1.svg';
import products_img_2 from '../../assets/images/products_img_2.svg';
import products_img_3 from '../../assets/images/products_img_3.svg';
import styles from "./AboutAlli.module.scss";
import ContentSection from "../ContentSection";

const AboutAlli = () => {
    return(
        <div className={styles.aboutAlli}>
        <Layout route="Über Alli">
            <ContentSection>
            <h1>Über Alli</h1>
                <p>In Deutschland gibt es ungefähr 100.000 Schwangerschaftsabbrüche und ungefähr ebenso viele Fehlgeburten. Obwohl sie häufig stattfinden, sind die Themen in der Gesellschaft immer noch stark tabuisiert. Es wird wenig öffentlich darüber gesprochen und aufgeklärt. Im Internet kursieren eine Menge an Mythen und Falschinformationen. Es ist daher nicht immer leicht, an medizinisch korrekte und wertneutrale Informationen zu kommen. Alli soll diese Lücke füllen: wissenschaftlich fundierte Informationen treffen auf eine empathische, personalisierte Wegbegleitung. Mit Alli wollen wir Betroffenen und medizinisches Fachpersonal unterstützen, indem wir ihnen ein digitales Hilfsmittel zur Verfügung stellen.</p>
            </ContentSection>
            <ContentSection>
                <p>Alli begleitet Personen mit einer ungewollten oder gestörten Frühschwangerschaft durch den gesamten Prozess der Schwangerschaftsbeendigung. Schritt für Schritt werden täglich die wichtigsten Informationen zusammengefasst. Mit Antworten auf die häufig gestellten Fragen, Vorschlägen zum Umgang mit Nebenwirkungen und einfachen Erklärungen zu den wichtigsten Fachbegriffen bietet die App eine gute Unterstützung.</p>
            </ContentSection>
            <ContentSection>
                <p>Alli wurde von qualifizierten Ärzt*innen, die seit vielen Jahren in diesem Bereich tätig sind, entwickelt und steht in Übereinstimmung mit den aktuellen wissenschaftlichen Standards (internationale Leitlinien). Die inhaltliche Ausrichtung der App beruht auf den Erfahrungen mit Patient*innen, ihren Rückmeldungen und einem breitem Austausch mit Kolleg*innen.</p>
            </ContentSection>
            <ContentSection>
            <h2>Funktionen im Überblick:</h2>
            <ul>
                <li>Detaillierte Anleitung für deine medikamentöse Schwangerschaftsbeendigung Zuhause</li>
                <li>Häufig gestellte Fragen und Antworten rund um das Thema</li>
                <li>Erläuterungen, weiterführende Infos und ein Glossar mit Begriffserklärungen</li>
                <li>Fundierte medizinische Informationen zu Risiken und Nebenwirkungen</li>
            </ul>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default AboutAlli