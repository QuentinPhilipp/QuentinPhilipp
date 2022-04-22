import styles from "../styles/SkillsShowcase.module.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


function Skill ({skill, skillCategory}) {
    var category = styles.frontend
    if (skillCategory.toLowerCase().replace("-", "") === "backend") {
        category = styles.backend
    }
    else if (skillCategory.toLowerCase().replace("-", "") === "other") {
        category = styles.other
    }
    return (
        <div className={`${styles.skill} ${category}`} dangerouslySetInnerHTML={{__html: `${skill.svg}  <p>${skill.name}</p>`}}></div>
    );
}

const SkillContainer = ({category}) => (
    <div className={styles.skillContainer}>
        <h2>
        <RoughNotation strokeWidth="10" color="#003249" type="highlight" show={true}>{category.header}</RoughNotation>
        </h2>
        {category.skills.map((skill) => (
            <Skill skill={skill} skillCategory={category.header} key={skill} />
        ))}
    </div>
)

function SkillsShowcase ({ skillsCategories }) {
    return (
        <div className={styles.skillCategories}>
        {skillsCategories.map((category) => (
            <SkillContainer category={category} key={category.header}/>
        ))}
        </div>
    );

}

export default SkillsShowcase;
