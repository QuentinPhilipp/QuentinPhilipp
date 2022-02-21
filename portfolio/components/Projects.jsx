import styles from '../styles/Projects.module.css';
import ProjectItem from "./ProjectItem";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Projects = ({ projects, title="Projects" }) => (
    <section id="projects" className={styles.projectSection}>
    <div className={styles.projectsLayout}>
        <h1 id="projectTitle" className={styles.projectsHeader}>
            <RoughNotation strokeWidth="3" color="#003249" type="box" show={true}>{title}</RoughNotation>
        </h1>
        <div className={styles.projectsContainer}>
            {projects.map((project) => (
                <ProjectItem project={project} key={project.id}/>
            ))}
        </div>
    </div>
    </section>

)

export default Projects; 



