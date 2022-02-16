import styles from "../styles/TechType.module.css"


const TechType = ({technoCategory, name}) => {
    return (
        <>
        {technoCategory.data.length > 0 &&
            <div className={styles.tech}>
                <h3 className={styles.technoCategory}>{name.toUpperCase()}</h3>
                {technoCategory.data.map((techno) => (
                    <p className={styles.technoName}>{techno.attributes.name}</p>
                ))}
            </div>
        }
        </>
    )
}

export default TechType;