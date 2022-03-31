import Navbar from './shared/Navbar';
import Contact from './Contact';
import styles from "../styles/Layout.module.css";

const Layout = ({ children, contactDetails }) => (
    <div>
        <Navbar />
        {children}
        <Contact contactDetails={contactDetails}/>
        <div className={styles.credits}>
            <p>Made with <s className={styles.love}>LOVE</s> a keyboard</p>
            <small className={styles.copy}>&copy; Copyright {new Date().getFullYear()}, Quentin Philipp</small>
        </div>
    </div>
  )
  export default Layout; 