import Layout  from "../Layout";
import ContentSection from "../ContentSection";
import styles from "./About.module.scss"

const About = () => {
    return(
      <div className={styles.about}>
        <Layout route="About us">
          <ContentSection>
            <p>We are a team of two doctors, a designer, and a programmer who supported us in the initial stages and continues to assist us from time to time. As a team, we bring together expertise in medicine, design, and programming. Our doctors have been involved in this field for a long time, which enables us to draw on a broad network of relevant initiatives, counseling centers, and doctors. We have a good understanding of current political developments and scientific standards (e.g. guidelines) that are taken into account in our projects. Our interactions with patients and medical personnel allow us to tailor our products to their needs and to test them accordingly.</p>
            <p>We believe that every person who can become pregnant should have access to empathetic and accurate information, which should be free and easily available. That's why we develop easy-to-understand information. Our medical information is based on guidelines and current scientific recommendations, ensuring accuracy and comprehensibility.</p>
          </ContentSection>
        </Layout>
      </div>
    )
  }

export default About;