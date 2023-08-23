import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss"
import Route from "./Route";

export default function Layout({ children, route }) {
  return (
    <div>
      <Header />
      <div className={styles.page}>
        <div className={styles.content}>
          {children}
        </div>
      <Route route={route}/>
      <Footer />
      </div>
    </div>
  );
}

