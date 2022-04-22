import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styles from "../styles/Articles.module.css";
import PostPreview from "./PostPreview";

function Articles({ articles, title="Articles" }) {
    return (
        <section id="articles" className={styles.articlesSection}>
        <hr className={styles.divider}/>
        <div className={styles.articlesLayout}>
            <h1 id="articleTitle" className={styles.articlesHeader}>
                <RoughNotation strokeWidth="3" color="#003249" type="bracket" padding="15px" brackets={["right", "left"]} show={true} >{title}</RoughNotation>
            </h1>
            <div className={styles.articlesContainer}>
            {articles.map((article) => (
                <PostPreview 
                title={article.attributes.title} 
                coverImage={article.attributes.ogImage.data.attributes}
                date={article.attributes.date} 
                slug={article.attributes.slug} 
                content={article.attributes.description}
                key={article.id}
                />
            ))}
            </div>
        </div>
        </section>
    );
  }

export default Articles; 