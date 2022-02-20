import Image from 'next/image';
import Link from 'next/link';
import TechNameItem from './TechNameItem';
import { getStrapiMedia } from '../lib/media';
import styles from "../styles/ProjectItem.module.css";


const ProjectItem = ({ project }) => (
    <article className={styles.card}>
        <div className={styles.imageContainer}>
            {project.attributes.image.data[0].attributes.formats.medium &&
                <Image
                src={getStrapiMedia(project.attributes.image.data[0].attributes.formats.medium)}
                width={project.attributes.image.data[0].attributes.formats.medium.width}
                height={project.attributes.image.data[0].attributes.formats.medium.height}
                alt={project.attributes.title}
                objectFit="cover"
                />
            }
            {!project.attributes.image.data[0].attributes.formats.medium &&
                <Image
                src={getStrapiMedia(project.attributes.image.data[0].attributes)}
                width={project.attributes.image.data[0].attributes.width}
                height={project.attributes.image.data[0].attributes.height}
                alt={project.attributes.title}
                objectFit="cover"
                />
            }
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
                <Link as={`/project/${project.attributes.slug}`} href="/project/[id]" target="_blank" passHref>
                    <div className={`${styles.buttonViewProject} ${styles.whiteColor}`}>
                        <div className={styles.textSVGContainer}>
                        View project
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonArrow} width="20px" height="20px" viewBox="0 0 16 16">
                            <path fill="#003249" className={styles.buttonArrowMain} d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                            <path className={styles.buttonArrowSecondary} d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                        </div>
                    </div>
                </Link>
                {project.attributes.demo_url &&
                <a className={`${styles.buttonViewProject} ${styles.accentColor}`} href={project.attributes.demo_url} target="_blank" rel="noopener noreferrer" >
                    <div className={styles.textSVGContainer}>
                        Live demo
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonArrow} width="20px" height="20px" viewBox="0 0 16 16">
                            <path fill="#003249" className={styles.buttonArrowMain} d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                            <path className={styles.buttonArrowSecondary} d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </a>
                }

            </div>
        </div>
    </article>

)

{/* <Link as={`/project/${project.attributes.slug}`} href="/project/[id]"> */}


export default ProjectItem; 
