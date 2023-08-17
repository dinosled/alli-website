import AlliTitle from "../AlliTitle";
import Content from "../Content";
import Layout from "../Layout";
import styles from "./Home.module.scss"

const Home = () => {
    return(
        <Layout>
            <Content 
            text={
                <p className={styles.text}>Our mission at <AlliTitle className={styles.alliTitleHeader}/> is to develop <em className={styles.emphasized}>tools</em> that <em className={styles.emphasized}>provide caring</em> and <em className={styles.emphasized}>accurate information</em>, supporting <em className={styles.emphasized}>patients</em> and <em className={styles.emphasized}>medical professionals</em> navigating the process of ending an <em className={styles.emphasized}>unwanted pregnancy</em> or <em className={styles.emphasized}>loss</em> with <em className={styles.emphasized}>pills</em>.
                </p>
            }/>
        </Layout>
      )
  }
export default Home;