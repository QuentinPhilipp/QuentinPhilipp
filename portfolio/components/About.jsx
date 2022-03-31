import styles from '../styles/About.module.css';
import { getStrapiMedia } from "../lib/media";

import LinkButton from "./LinkButton";
import CTAButton from "./CTAButton";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const About = ({ content, links, profile }) => (
    <section id="about" className={styles.layoutContainer}>
        <div className={styles.layout}>
            {/* <div className={styles.picture}>
            <Image
            src={getStrapiMedia(profile.attributes.image.data.attributes)}
            width={250}
            height={350}
            alt="Profile picture"
            objectFit="cover"
              />
            </div> */}
            <div className={styles.aboutContent}>
                <h2 id="projectTitle" className={styles.aboutHeader}>
                <RoughNotation strokeWidth="3" color="#003249" type="underline" show={true}>About Me</RoughNotation>
                </h2>
                <p>{content.attributes.content}</p>
                <div className={styles.contact}>                
                    <div className={styles.linkContainer}>
                    {links.map((link) => (
                    <LinkButton link={link} color={"dark"} key={link.id}/> ))}
                    </div>
                </div>
                <div className={styles.downloadContainer}>
                <CTAButton url={"QuentinPhilippResume.pdf"} text={"Download my CV"} download={"QuentinPhilipp CV"}/>
                </div>
            </div>
        </div>
    </section>

)

export default About;
