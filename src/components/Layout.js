import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss"
import Route from "./Route";

export default function Layout({ children, route }) {
  return (
    <div>
      <a href="#main-content" className={styles.srOnly}>Skip to Content</a>
      <Header />
      <div className={styles.page}>
        <div id="main-content" className={styles.content}>
          {children}
        </div>
      <Route route={route}/>
      <Footer />
      </div>
    </div>
  );
}

