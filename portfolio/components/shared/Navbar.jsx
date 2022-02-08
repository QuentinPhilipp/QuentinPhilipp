import styles from "../../styles/Navbar.module.css";


const Navbar = () => (
  <nav class={styles.topnav} id="myTopnav">
  <a href="#" class="active">Quentin Philipp</a>
  <a href="#about">About</a>
  <a href="#experiences">Experiences</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>
);export default Navbar;