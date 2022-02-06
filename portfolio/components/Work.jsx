import styles from "../styles/Work.module.css";
import { getStrapiMedia } from '../lib/media';
import TechNameItem from './TechNameItem';
import Link from 'next/link';
import Image from 'next/image';


const Work = ({ work }) => (
    <div className={styles.workWrapper}>
        <div className={styles.card}>
            <div className={styles.title}>{work.attributes.title}</div>
            <div className={styles.company}>{work.attributes.place.data.attributes.name}</div>
            <div className={styles.place}>
            {work.attributes.place.data.attributes.city.data.attributes.name},  
            ({work.attributes.place.data.attributes.city.data.attributes.countrycode})
            </div>
            <div className={styles.dates}>
                <span>{work.attributes.startdate} - </span>
                <span>{work.attributes.enddate}</span>
            </div>
            <div className={styles.description}>{work.attributes.content}</div>
            <div className={styles.stack}>
                {work.attributes.stack.data.map((techno) => (
                        <TechNameItem techno={techno} key={techno.id}/>
                ))}
            </div>
        </div>
        <div className={styles.logo}>
            <Image
                src={getStrapiMedia(work.attributes.place.data.attributes.icon.data.attributes)}
                width={600}
                height={300}
                alt={work.attributes.place.data.attributes.name}
                objectFit="cover"
            />
        </div>
    </div>
)


export default Work; 
