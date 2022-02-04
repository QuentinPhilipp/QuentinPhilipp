import styles from '../styles/TechNameItem.module.css';

const TechNameItem = ({ name }) => (
    <span className={styles.techName}>{name}</span>
)

export default TechNameItem;