import styles from "../styles/CTAButton.module.css";
import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const CTAButton = ({ text, url }) => (
    <a className={styles.addressDetail} href={url}>
        <span>{text.toUpperCase()}</span>
    </a>
);

export default CTAButton;