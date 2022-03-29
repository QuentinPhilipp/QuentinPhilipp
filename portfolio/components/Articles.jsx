import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styles from "../styles/Articles.module.css";
import PostPreview from "./PostPreview";

function Articles({ articles, title="Articles" }) {
    return (
        <section id="articles" className={styles.articlesSection}>
        <svg className={styles.divider} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 150">
            <path stroke="#003249" strokeWidth="2" d="m-3.99422,142.24996c70.06874,-7.87878 100.17807,-13.71146 111.33292,-15.41256c11.15485,-1.7011 46.46444,-10.85118 44.47439,-4.49251c-1.99005,6.35867 4.66629,1.36363 7.96941,-1.49872c3.30312,-2.86236 11.60605,-4.54063 13.34826,-3.02184c0.8711,0.7594 -4.8033,4.24126 -5.27352,6.29127c-0.47022,2.05002 0.44817,3.30413 6.87369,0.87989c3.21276,-1.21212 18.28057,-3.23943 21.09678,-3.32959c0.70405,-0.02254 -5.2107,-11.5511 -5.11232,-13.05997c0.09838,-1.50887 -3.33702,1.58953 -6.3825,4.27309c-3.04548,2.68356 1.51096,-4.96243 3.83386,-5.86153c2.3229,-0.8991 -12.4841,0.49046 -7.31033,-1.16752c5.17377,-1.65798 7.93279,0.11639 9.2708,-2.54843c1.33801,-2.66482 10.93765,-5.82809 7.43094,-3.70937c-3.50671,2.11872 -7.83035,5.69703 -5.33787,5.49401c2.49248,-0.20302 4.24707,-0.33746 8.17963,0.48552c3.93255,0.82298 -7.85596,0.74874 -7.7871,1.80537c0.06886,1.05663 4.44327,13.00089 5.73704,13.25342c2.58755,0.50506 13.87094,-2.31246 28.37662,-2.38141c14.50569,-0.06894 232.74949,1.29072 234.23458,1.40866c1.48509,0.11794 285.13507,-1.01293 305.36504,-1.21212c20.22997,-0.19919 63.64296,-65.45446 63.03126,-65.45452c0.6117,0.00006 15.87092,32.99263 16.01621,32.93829c0.14529,-0.05434 31.79705,-46.54847 31.85165,-45.99132c0.0546,0.55715 20.45686,39.24368 20.92851,39.53086c0.47164,0.28718 10.18459,-3.21879 10.56401,-3.46992c0.37941,-0.25114 16.88912,30.80483 16.55677,27.49152l19.59123,-39.69728l8.39052,3.79193l22.52409,-34.25422c0.29036,0.1814 24.22719,62.8332 24.52484,62.54877" fill="#f2f2f2"/>
        </svg>
        <div className={styles.articlesLayout}>
            <h1 id="articleTitle" className={styles.articlesHeader}>
                <RoughNotation strokeWidth="3" color="#003249" type="box" show={true}>{title}</RoughNotation>
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