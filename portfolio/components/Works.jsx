import styles from "../styles/Works.module.css";
import {useState} from 'react';
import Work from "./Work";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const WorkSpacer = ({work, len}) => (
    <div className={styles.workDivider}>
    {work.id % 2 == 0 && work.id < len &&
    [
    <div className={`${styles.connectorDot} ${styles.right}`} key={`${work.attributes.title}_ping`}>
        <div className={styles.connectorPing}></div>
    </div>,
    <div className={`${styles.connectorLine} ${styles.firstSegment} ${styles.right}`} key={`${work.attributes.title}_1`}></div>,
    <div className={`${styles.connectorLine} ${styles.horizontalSegment}`} key={`${work.attributes.title}_2`}></div>,
    <div className={`${styles.connectorLine} ${styles.secondSegment} ${styles.left}`} key={`${work.attributes.title}_3`}></div>,
    ]
    }
    {work.id % 2 == 1 && work.id < len &&
    [
        <div className={`${styles.connectorDot} ${styles.left}`} key={`${work.attributes.title}_ping`}>
            <div className={styles.connectorPing}></div>
        </div>,
        <div className={`${styles.connectorLine} ${styles.firstSegment} ${styles.left}`} key={`${work.attributes.title}_1`}></div>,
        <div className={`${styles.connectorLine} ${styles.horizontalSegment}`} key={`${work.attributes.title}_2`}></div>,
        <div className={`${styles.connectorLine} ${styles.secondSegment} ${styles.right}`} key={`${work.attributes.title}_3`}></div>,
        ]
    }
    </div>
)

function WorkContainer ({ works }) {
    return (
        <div className={styles.worksContainer}>
        {works.map((work) => (
            [                                
            <Work work={work} key={work.attributes.title} />,
            <WorkSpacer work={work} key={work.id} len={works.length} />
            ]
        ))}
        </div>
    );

}

const ReadMore = ({ works }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className={styles.worksContainer}>
        {isReadMore ? <WorkContainer works={works.slice(0, 3)}/> : <WorkContainer works={works}/>}
        <span onClick={toggleReadMore} className={styles.moreOrHide}>
          {isReadMore ? "Read more" : "Show less"}
        </span>
      </div>
    );
  };
    

function Works({ works }) {
    return (
        <section id="experiences">
            <div className={styles.worksLayout}>
                <h1 id="projectTitle" className={styles.worksHeader}>
                    <RoughNotation strokeWidth="3" color="white" type="highlight" show={true}>Experiences</RoughNotation>
                </h1>
                <ReadMore works={works}/>
            </div>
        </section>
    );
  }

export default Works; 
