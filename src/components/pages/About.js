import Layout from "../Layout";
import ContentSection from "../ContentSection";
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.about}>
      <Layout route="Über uns">
        <ContentSection>
          <h1>Über uns</h1>
          <p>Wir bei Alli sind überzeugt davon, dass alle Personen, die schwanger werden können, Zugang zu medizinisch korrekten Informationen, die kostenlos und leicht zugänglich sind, und eine empathische Unterstützung in Bezug auf Schwangerschaftsoptionen haben sollten. Aus diesem Grund schloss sich 2022 ein interdisziplinäres Team aus Medizin, Design und Softwareentwicklung zusammen, um mit der Entwicklung eines Prototypen zu beginnen.</p>
          <p>Alli stellt dabei die Weiterentwicklung der App „Medabb“ (2017) dar, die von Patient*innen, Berater*innen und medizinischem Personal sehr gut angenommen wurde.</p>
          <p>Die Entwicklung von Alli wurde ermöglicht durch eine sechsmonatige Förderung durch den Prototype Fund (Bundesministerium für Bildung und Forschung) sowie eine Förderung durch Doctors for Choice Germany e.V. - einem deutschlandweiten Netzwerk von Ärzt*innen und Gesundheitsberufen, die sich für reproduktive Selbstbestimmung, Gesundheit und Gleichberechtigung einsetzen. Doctors for Choice Germany e.V. arbeitet gesundheitsorientiert, evidenzbasiert und feministisch.</p>
          {/* <p>We are a team of two doctors, a designer, and a programmer who supported us in the initial stages and continues to assist us from time to time. As a team, we bring together expertise in medicine, design, and programming. Our doctors have been involved in this field for a long time, which enables us to draw on a broad network of relevant initiatives, counseling centers, and doctors. We have a good understanding of current political developments and scientific standards (e.g. guidelines) that are taken into account in our projects. Our interactions with patients and medical personnel allow us to tailor our products to their needs and to test them accordingly.</p>
          <p>We believe that every person who can become pregnant should have access to empathetic and accurate information, which should be free and easily available. That's why we develop easy-to-understand information. Our medical information is based on guidelines and current scientific recommendations, ensuring accuracy and comprehensibility.</p> */}
        </ContentSection>
      </Layout>
    </div>
  )
}

export default About;