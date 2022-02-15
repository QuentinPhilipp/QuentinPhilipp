import styles from "../../styles/Navbar.module.css";

const Navbar = () => (
<nav className={styles.navbar} id="topnavResp">
    <a className={styles.navItem} href="#home">Home</a>
    <a className={styles.navItem} href="#about">About</a>
    <a className={styles.navItem} href="#experiences">Experiences</a>
    <a className={styles.navItem} href="#projects">Projects</a>
    {/* <a id="go-top" style="color: white; display: none; cursor: pointer;" onClick="goToTop()"><i class="fa fa-arrow-up fa-lg"></i></a> */}
    <a href="javascript:void(0);" className={styles.icon} onClick={toggleResponsive}>
    <svg viewBox="0 0 100 80" width="30" height="30" fill="#fff">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
    </a>
</nav>
);

export default Navbar;


// Toggle responsive for navbar
function toggleResponsive() {
  console.log("TEST");
  let x = document.getElementById('topnavResp');
  console.log(x);
  if (x.classList.contains(`${styles.responsive}`)) {
    x.classList.remove(`${styles.responsive}`)
  }
  else{
    x.classList.add(`${styles.responsive}`)
  }
}