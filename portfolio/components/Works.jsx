import styles from "../styles/Works.module.css";
import Work from "./Work";


const Works = ({ works }) => (
    <div className={styles.worksContainer}>
        {works.map((work) => (
            // <li >
            //     {work.attributes.title}
            // </li>
            <Work work={work} key={work.id}/>
        ))}
    </div>
)


export default Works; 
