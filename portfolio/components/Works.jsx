import styles from "../styles/Works.module.css";
import Work from "./Work";


const Works = ({ works }) => (
    <section>
    <div className={styles.worksLayout}>
        <h1 className={styles.worksHeader}>Experiences</h1>
        <div className={styles.worksContainer}>
            {works.map((work) => (
                <Work work={work} key={work.id}/>
            ))}
        </div>
    </div>
    </section>

)


export default Works; 
