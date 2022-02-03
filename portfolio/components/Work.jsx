import styles from "../styles/Work.module.css";

const Work = ({ work }) => (
    <div className={styles.card}>
        {work.attributes.title}
    </div>
)


export default Work; 
