import styles from "../styles/CTAButton.module.css";
import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const CTAButton = ({ text, url, download }) => (
    <a className={styles.addressDetail} href={url} href={"QuentinPhilippResume.pdf"} download={download}>
        <span>{text.toUpperCase()}</span>
    </a>
);

export default CTAButton;