import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Layout route="Contact">
        <ContentSection>
          <p>
            Hello there! We're excited to receive your message and will do our
            best to get back to you as soon as possible. Please keep in mind
            that we are a small team, so it might take us a moment to respond.
            Thank you for your patience and understanding.
          </p>
          <a
            href="mailto:team@alli-app.com"
            aria-label="Send us a mail"
            className={styles.mailSection}
          >
            <FontAwesomeIcon
              className={styles.envelopeIcon}
              icon={faEnvelope}
              aria-hidden="true"
            />
            <div className={styles.link}>team@alli-app.com</div>
          </a>
        </ContentSection>
      </Layout>
    </div>
  );
};

export default Contact;
