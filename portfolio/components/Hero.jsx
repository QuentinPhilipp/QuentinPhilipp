import styles from '../styles/Hero.module.css';
import HeroSVG from './HeroSVG';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Typist from 'react-typist';
import {useEffect} from 'react';
import {useState} from 'react';

function Hero ({ content }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
      setCount(1);
    }, [count]);

    return (
    <header id="home" className={styles.hero}>
        <div className={styles.heroText}>
            <RoughNotation strokeWidth="3" color="white" type="bracket" padding="15px" brackets={["right", "left"]} show={true}>
            <h1 className={styles.nameHeader}>I&apos;m <span className={"accentColor"}> Quentin </span> <br></br> Philipp</h1>
            </RoughNotation>
            {/* <p className={styles.details}>A french software engineer,<br></br>  passionated about software <br></br> development and sports.</p> */}
            <div className={styles.details}>A french software engineer,<br></br>  passionated about
            {count ? (
                <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span className={"accentColor"}> software development.</span>
                <Typist.Backspace count={21} delay={1500} />
                <span className={"accentColor"}> cycling.</span>
                <Typist.Backspace count={8} delay={1500} />
                <span className={"accentColor"}> adventure.</span>
                <Typist.Backspace count={10} delay={1500} />
                <span className={"accentColor"}> new technologies.</span>
                <Typist.Backspace count={17} delay={1500} />
                </Typist>
            ) : (
                ""
            )}
            </div>
        </div>
        <div className={styles.heroImage} >
        <HeroSVG width={600} height={600}/>
        </div>

    </header>
    );
}


export default Hero