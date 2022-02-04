import styles from '../styles/TechNameItem.module.css';

const TechNameItem = ({ techno }) => (
    <span className={styles.techName}>{techno.attributes.name}</span>
)

export default TechNameItem;