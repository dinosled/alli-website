import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { submitContactFormAsEmail } from "../../helper/helper";



const Contact = () => {
  const [form, setForm] = useState({
    "name": "",
    "email": "",
    "subject": "",
    "message": ""
  })

  const onInput = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const sentEmail = await submitContactFormAsEmail(form)
      console.log(sentEmail.ok)
    } catch (error) {
      console.error(error.message)
      return
    }
  }

  return (
    <div className={styles.contact}>
      <Layout route="Kontakt">
        <ContentSection>
          <p>
            Hello there! We're excited to receive your message and will do our
            best to get back to you as soon as possible. Please keep in mind
            that we are a small team, so it might take us a moment to respond.
            Thank you for your patience and understanding.
          </p>
          </ContentSection>
          <ContentSection>
            <form onInput={onInput} onSubmit={onSubmit}>
              <label>Your name</label>
              <input type="text" name="name" defaultValue={form.name} required/>
              <label>Your e-Mail</label>
              <input type="email" name="email" defaultValue={form.email} required/>
              <label>Subject</label>
              <input type="text" name="subject" defaultValue={form.subject}/>
              <label>Your message</label>
              <textarea name="message" defaultValue={form.message}></textarea>
              <button type="submit">Submit</button>
            </form>
          </ContentSection>
          <ContentSection>
          <p>Otherwise, you can also send us an e-mail:</p>
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
