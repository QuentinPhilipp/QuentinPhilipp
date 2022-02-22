import styles from "../styles/Work.module.css";
import { getStrapiMedia } from '../lib/media';
import TechNameItem from './TechNameItem';
import Link from 'next/link';
import Image from 'next/image';


const Work = ({ work }) => (
    <article className={styles.workWrapper}>
        <div className={styles.detail}>
            <h2 className={styles.title}>{work.attributes.title}</h2>
            <p className={styles.companySmall}>{work.attributes.place.data.attributes.name}</p>
            <div className={styles.datesSmall}>
                    <span>{work.attributes.startdate.slice(0, -3).replace("-","/")} - </span>
                    {work.attributes.enddate &&
                    <span>{work.attributes.enddate.slice(0, -3).replace("-","/")}</span>
                    }
                    {!work.attributes.enddate &&
                    <span>Now</span>
                    }
                </div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: work.attributes.content }} />
            <div className={styles.stack}>
                {work.attributes.stack.data.map((techno) => (
                        <TechNameItem techno={techno} key={techno.id}/>
                ))}
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoContainer}>
                <Image
                    src={getStrapiMedia(work.attributes.place.data.attributes.icon.data.attributes)}
                    width={600}
                    height={300}
                    alt={work.attributes.place.data.attributes.name}
                    objectFit="cover"
                />
                <p className={styles.company}>{work.attributes.place.data.attributes.name}</p>
                <div className={styles.place}>
                {work.attributes.place.data.attributes.city.data.attributes.name},  
                ({work.attributes.place.data.attributes.city.data.attributes.countrycode})
                </div>
                <div className={styles.dates}>
                    <span>{work.attributes.startdate.slice(0, -3).replace("-","/")} - </span>
                    {work.attributes.enddate &&
                    <span>{work.attributes.enddate.slice(0, -3).replace("-","/")}</span>
                    }
                    {!work.attributes.enddate &&
                    <span>Now</span>
                    }
                </div>
            </div>
        </div>
    </article>
)


export default Work; 
