import Image from 'next/image';
import Link from 'next/link';
import TechNameItem from './TechNameItem';
import { getStrapiMedia } from '../lib/media';
import styles from "../styles/ProjectItem.module.css";


const ProjectItem = ({ project }) => (
    <article className={styles.projectWrapper}>
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={getStrapiMedia(project.attributes.image.data[0].attributes)}
                    width={600}
                    height={300}
                    alt={project.attributes.title}
                    objectFit="cover"
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h3>{project.attributes.title}</h3>
                    <p className={styles.projectShortDesc}>{project.attributes.short_desc}</p>
                    <div className={styles.techContainer}>
                        {project.attributes.project_highlight_techno.data.map((techno) => (
                            <TechNameItem techno={techno} key={techno.id}/>
                        ))}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link as={`/project/${project.attributes.slug}`} href="/project/[id]" target="_blank">
                        <div className={`${styles.buttonViewProject} ${styles.blue}`}>
                            View project
                            <svg fill="white" viewBox="0 0 20 20" className={styles.buttonArrow}>
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link as={`/project/${project.attributes.slug}`} href="/project/[id]" target="_blank">
                        <div className={`${styles.buttonViewProject} ${styles.grey}`}>
                            See the code
                            <svg fill="white" viewBox="0 0 20 20" className={styles.buttonArrow}>
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </article>

)

{/* <Link as={`/project/${project.attributes.slug}`} href="/project/[id]"> */}


export default ProjectItem; 
