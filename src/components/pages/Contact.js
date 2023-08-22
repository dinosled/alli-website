import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Contact.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return(
    <div className={styles.contact}>
    <Layout route="Contact & Imprint">
      <ContentSection>
        <p>Hello there! We're excited to receive your message and will do our best to get back to you as soon as possible. Please keep in mind that we are a small team, so it might take us a moment to respond. Thank you for your patience and understanding.</p>        
        <a href="mailto:team@alli-app.com" aria-label="Send mail to" className={styles.mailSection}>
          <FontAwesomeIcon className={styles.envelopeIcon} icon={faEnvelope} aria-hidden="true"/>
          <div className={styles.link}>
            team@alli-app.com
          </div>
        </a>
        
      </ContentSection>
      <ContentSection>
        <div className={styles.section}>
          <h1>Imprint</h1>
          <p>Maeffert, Schuster, Nikitenko & Kühn GbR</p>
          <p>
            Represented by: <br/>
            Dani Nikitenko (Managing Director) <br/>
            Franz-Mehring-Platz 1<br/>
            10243 Berlin<br/>
            Mail: 
            <a href="mailto:team@alli-app.com" aria-label="Send mail to"  className={styles.link}>
            team@alli-app.com<br/>
            </a>
          </p>
          <h1>Credits</h1>
          <h2>Graphics:</h2>
          <p>We utilize illustrations from <a href="https://undraw.co/" target="_blank" rel="noreferrer" aria-label="Link to "  className={styles.link}>unDraw.co </a> and are incredibly grateful for the open-source illustrations they provide.</p>
          <h2>Icons:</h2>
          <p>The icons we use have been generously provided by Font Awesome, created by Dave Gandy - <a href="https://fontawesome.com/" aria-label="Link to " target="_blank" rel="noreferrer" className={styles.link}>fontawesome.com</a></p>
          <h1>Disclaimer</h1> 
          <p>We would like to point out that as the operator of this website, we cannot assume any responsibility for linked content or external links. The content of linked pages is the sole responsibility of their operators. At the time of linking, the linked pages were checked for possible illegal activity, and no unlawful content was identifiable. However, continuous monitoring of linked pages without specific indications of illegal activity is not reasonable. Upon becoming aware of any illegal activity, we will promptly remove such links.</p> 
          <h1>Copyright</h1> 
          <p>The content and works created by the website operators on this website are subject to German copyright law. They are protected by a Creative Commons license. Unless otherwise stated, the content on this website is licensed under the Creative Commons Attribution 3.0 Germany License. To the extent that the content on this website was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you become aware of a copyright infringement despite our efforts, please provide us with appropriate notice. Upon becoming aware of any infringements, we will promptly remove such content.</p>
        </div>
      </ContentSection>
    </Layout>
    </div>
  )
}

export default Contact;