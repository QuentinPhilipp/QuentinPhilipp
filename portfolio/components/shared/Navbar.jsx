import styles from "../../styles/Navbar.module.css";
import Link from 'next/link';
// Toggle responsive for navbar


function Navbar() {
  function toggleResponsive() {
    let x = document.getElementById('topnavResp');
    if (x.classList.contains(`${styles.responsive}`)) {
      x.classList.remove(`${styles.responsive}`)
    }
    else{
      x.classList.add(`${styles.responsive}`)
    }
  }

  function turnOffResponsive() {
    let x = document.getElementById('topnavResp');
    if (x.classList.contains(`${styles.responsive}`)) {
      x.classList.remove(`${styles.responsive}`)
    }
  }

  return (
  <nav className={styles.navbar} id="topnavResp">
      <Link as="/#home" href="/#home" passHref>
        <span className={styles.navItem} onClick={turnOffResponsive}>Home</span>
      </Link>
      <Link as="/#about" href="/#about" passHref>
        <span className={styles.navItem} onClick={turnOffResponsive}>About</span>
      </Link>
      <Link as="/#experiences" href="/#experiences" passHref>
        <span className={styles.navItem} onClick={turnOffResponsive}>Experiences</span>
      </Link>
      <Link as="/#projects" href="/#projects" passHref>
        <span className={styles.navItem} onClick={turnOffResponsive}>Projects</span>
      </Link>
      <p className={styles.icon} onClick={toggleResponsive}>
      <svg viewBox="0 0 100 80" width="30" height="30" fill="#fff">
        <rect width="100" height="17"></rect>
        <rect y="30" width="100" height="17"></rect>
        <rect y="60" width="100" height="17"></rect>
      </svg>
      </p>
  </nav>
  );
}

export default Navbar;


