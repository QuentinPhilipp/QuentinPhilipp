import styles from '../styles/ProjectItem.module.css';
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => (
    <div className={styles.projectsContainer}>
        {projects.map((project) => (
            <ProjectItem project={project} key={project.id}/>
        ))}
    </div>
)


export default Projects; 



