import styles from "../styles/SkillCard.module.css";

const SkillCard = ({ skill }) => {
    return (
    <div className={styles.skillCard}>
        <h2 className={styles.title}>{skill.title}</h2>
        <p className={styles.content}>{skill.content}</p>
    </div>
    );
}

export default SkillCard;
