import styles from "../styles/Works.module.css";
import Work from "./Work";

const WorkSpacer = ({work}) => (
    <div className={styles.workDivider}>
    {work.id % 2 == 0 &&
    [
    <div className={`${styles.connectorDot} ${styles.right}`}>
        <div className={styles.connectorPing}></div>
    </div>,
    <div className={`${styles.connectorLine} ${styles.firstSegment} ${styles.right}`}></div>,
    <div className={`${styles.connectorLine} ${styles.horizontalSegment}`}></div>,
    <div className={`${styles.connectorLine} ${styles.secondSegment} ${styles.left}`}></div>,
    ]
    }
    {work.id % 2 == 1 &&
    [
        <div className={`${styles.connectorDot} ${styles.left}`}>
            <div className={styles.connectorPing}></div>
        </div>,
        <div className={`${styles.connectorLine} ${styles.firstSegment} ${styles.left}`}></div>,
        <div className={`${styles.connectorLine} ${styles.horizontalSegment}`}></div>,
        <div className={`${styles.connectorLine} ${styles.secondSegment} ${styles.right}`}></div>,
        ]
    }
    </div>
)


const Works = ({ works }) => (
    <section id="experiences">
    <div className={styles.worksLayout}>
        <h1 className={styles.worksHeader}>Experiences</h1>
        <div className={styles.worksContainer}>
            {works.map((work) => (
                [                                
                <Work work={work} key={work.id} />,
                <WorkSpacer work={work} key={work.attributes.title} />

                ]
            ))}
        </div>
    </div>
    </section>

)


export default Works; 
