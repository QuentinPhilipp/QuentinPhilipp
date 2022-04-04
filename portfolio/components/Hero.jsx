import styles from '../styles/Hero.module.css';
import HeroSVG from './HeroSVG';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = ({ content }) => (
    <header id="home" className={styles.hero}>
        <div className={styles.heroText}>
            <RoughNotation strokeWidth="3" color="white" type="bracket" padding="15px" brackets={["right", "left"]} show={true}>
            <h1 className={styles.nameHeader}>I&apos;m <span className={"accentColor"}> Quentin </span> <br></br> Philipp</h1>
            </RoughNotation>
            <p className={styles.details}>A french software engineer,<br></br>  passionated about software <br></br> development and sports.</p>
        </div>
        <div className={styles.heroImage} >
        <HeroSVG width={600} height={600}/>
        </div>

    </header>
)

export default Hero