import styles from "../../styles/Navbar.module.css";

const Navbar = () => (
<nav className={styles.navbar} id="topnavResp">
    <a className={styles.navItem} href="/#home">Home</a>
    <a className={styles.navItem} href="/#about">About</a>
    <a className={styles.navItem} href="/#experiences">Experiences</a>
    <a className={styles.navItem} href="/#projects">Projects</a>
    <a href="javascript:void(0);" className={styles.icon} onClick={toggleResponsive}>
    <svg viewBox="0 0 100 80" width="30" height="30" fill="#fff">
      <rect width="100" height="17"></rect>
      <rect y="30" width="100" height="17"></rect>
      <rect y="60" width="100" height="17"></rect>
    </svg>
    </a>
</nav>
);

export default Navbar;


// Toggle responsive for navbar
function toggleResponsive() {
  let x = document.getElementById('topnavResp');
  if (x.classList.contains(`${styles.responsive}`)) {
    x.classList.remove(`${styles.responsive}`)
  }
  else{
    x.classList.add(`${styles.responsive}`)
  }
}