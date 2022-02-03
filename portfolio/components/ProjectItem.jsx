import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from '../lib/media';
import styles from "../styles/ProjectItem.module.css";


const ProjectItem = ({ project }) => (
    <div className={styles.projectWrapper}>
        <div className={styles.card}>
        <Link as={`/project/${project.attributes.slug}`} href="/project/[id]">
            <div className="main-image">
            <Image
                src={getStrapiMedia(project.attributes.image.data[0].attributes)}
                width={600}
                height={400}
                alt={project.attributes.Headline}
            />
            <h1>{project.attributes.Headline}</h1>
            <p>{project.attributes.content}</p>
            </div>
        </Link>
        </div>
    </div>

)

export default ProjectItem; 