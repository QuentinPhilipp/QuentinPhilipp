import styles from '../styles/Projects.module.css';
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => (
    <div className={styles.projectsLayout}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
            {projects.map((project) => (
                <ProjectItem project={project} key={project.id}/>
            ))}
        </div>
    </div>

)


export default Projects; 



