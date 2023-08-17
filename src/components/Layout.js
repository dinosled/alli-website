import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss"
export default function Layout({ children }) {
  return (
    <div>
      <Header />
        <div className={styles.content}>
          {children}
        </div>
      <Footer />
    </div>
  );
}

