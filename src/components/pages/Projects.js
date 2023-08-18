import Layout from "../Layout";
import products_img_1 from '../../assets/images/products_img_1.svg';
import products_img_2 from '../../assets/images/products_img_2.svg';
import products_img_3 from '../../assets/images/products_img_3.svg';
import styles from "./Products.module.scss";
import ContentSection from "../ContentSection";

const Projects = () => {
    return(
        <Layout route="Projects">
            <ContentSection>
                <img src={products_img_1} alt="A smartphone with some abstract content in the foreground." />
                <p>At Alli, we believe that everyone who can become pregnant should have access to medically correct information and support regarding pregnancy options. Unfortunately, it is still difficult for individuals facing an unwanted pregnancy or early pregnancy loss to find medically correct and value-neutral resources, as there is a lot of false information on the internet. That's where we come in. Through our Alli-App and Alli-Box, we aim to support patients and medical professionals by providing them with the tools they need to navigate the process.</p>
            </ContentSection>
            <ContentSection>
                <img src={products_img_2 } alt="A smartphone with some abstract content."/>
                <p>Alli's flagship product is the <em className={styles.emphasized}>Alli-App</em>, designed to guide patients through the entire medication abortion process. With daily updates on next steps, side effect management, and FAQs, the app provides patients with the support they need. Thanks to funding from the Prototype Fund with resources from the BMBF, the app is already in development.
                {/* <br/><span className={styles.link}><a href="https://github.com/dinosled/alli-app" target="_blank" rel="noreferrer">Join our App-Testgroup</a> </span> */}
                <span className={styles.link}><a href="https://github.com/dinosled/alli-app" target="_blank" rel="noreferrer">Join our code community</a> </span>         
                </p>
            </ContentSection>
            <ContentSection>
                <img src={products_img_3} alt="A turquoise box"/>
                <p>We are also working on the <em className={styles.emphasized}>Alli-Box</em>, a packaging solution for medical professionals to package medication for terminating an unwanted pregnancy or early pregnancy loss. Currently, medication is often handed out to patients just in cut-out blisters with handwritten numbers. This approach is undignified and can exacerbate the situation for those affected. The Alli-Box aims to provide a more comprehensive packaging solution that includes important information for patients and supports medical professionals in their care.
                {/* <br/> <span> className={styles.link}><a href="https://github.com/dinosled/alli-app" target="_blank" rel="noreferrer">Become a Box-Tester</a> </span>     */}
                </p>
            </ContentSection>
        </Layout>
    )
}
export default Projects