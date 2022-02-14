import styles from "../styles/LinkButton.module.css";
import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const LinkButton = ({ link, color }) => (
    <a className={`${styles.addressDetail} ${color}`} href={link.attributes.url} key={link.id}>
        <Image
            src={getStrapiMedia(link.attributes.icon.data.attributes)}
            width={30}
            height={30}
            alt={link.attributes.display}
            objectFit="cover"
        />
        <span>{link.attributes.display}</span>
    </a>
);

export default LinkButton;