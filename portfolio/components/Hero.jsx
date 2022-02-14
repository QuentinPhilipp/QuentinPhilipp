import styles from '../styles/Hero.module.css';
import HeroSVG from './HeroSVG';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = ({ content }) => (
    <section id="home" className={styles.hero}>
        <div className={styles.heroText}>
            <RoughNotation strokeWidth="3" color="white" type="bracket" padding="15px" brackets={["right", "left"]} show={true}>
            <h1 className={styles.nameHeader}>I'm <span className={'accentColor'}> Quentin </span> <br></br> Philipp</h1>
            </RoughNotation>
            <p className={styles.details}>A french software engineer,<br></br>  passionated about software <br></br> development and embedded systems</p>
        </div>
        <div className={styles.heroImage} >
        <HeroSVG width={500} height={500}/>
        </div>

    </section>
)

export default Hero