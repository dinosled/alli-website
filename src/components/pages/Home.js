import AlliTitle from "../AlliTitle";
import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Home.module.scss"

const Home = () => {
    return(
        <div className={styles.home}>
        <Layout route="Home">
            <ContentSection>
            <p>Our mission at <AlliTitle className={"alliTitleHome"}/> is to develop <em className={styles.emphasized}>tools</em> that <em className={styles.emphasized}>provide caring</em> and <em className={styles.emphasized}>accurate information</em>, supporting <em className={styles.emphasized}>patients</em> and <em className={styles.emphasized}>medical professionals</em> navigating the process of ending an <em className={styles.emphasized}>unwanted pregnancy</em> or <em className={styles.emphasized}>early pregnancy loss</em> with <em className={styles.emphasized}>pills</em>.</p>
            </ContentSection>
        </Layout>
        </div>
      )
  }
export default Home;