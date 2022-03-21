import styles from "../styles/Works.module.css";
import {useState} from 'react';
import Work from "./Work";
import ToggleSwitch from "./ToggleSwitch";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const WorkSpacer = ({work, len, position}) => (
    <div className={styles.workDivider}>
    {position % 2 == 0 && position < len &&
    [
    <div className={`${styles.connectorDot} ${styles.right}`} key={`${work.attributes.title}_ping`}>
        <div className={styles.connectorPing}></div>
    </div>,
    <div className={`${styles.connectorLine} ${styles.firstSegment} ${styles.right}`} key={`${work.attributes.title}_1`}></div>,
    <div className={`${styles.connectorLine} ${styles.horizontalSegment}`} key={`${work.attributes.title}_2`}></div>,
    <div className={`${styles.connectorLine} ${styles.secondSegment} ${styles.left}`} key={`${work.attributes.title}_3`}></div>,
    ]
    }
    {position % 2 == 1 && position < len &&
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
        {works.map((work, index) => (
            [                                
            <Work work={work} key={work.attributes.title} />,
            <WorkSpacer work={work} key={work.id} len={works.length} position={index+1} />
            ]
        ))}
        </div>
    );

}

const ReadMore = ({ works }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isJobOnly, setIsJobOnly] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const toggleJobOnly = () => {
        setIsJobOnly(!isJobOnly);
    };

    function getWorksFromToggle() {
        if (isJobOnly) {
            return works.filter(item => item.attributes.contexts.data[0].attributes.context != "Studies");
        }
        else {
            return works;
        }
    }

    return (
        <div className={styles.worksContainer}>
        <ToggleSwitch 
            isOn={isJobOnly}
            handleToggle={() => toggleJobOnly()}
            checkedText="Professional experiences only"
            uncheckedText="Professional and school experience"
        />

        {isReadMore ? <WorkContainer works={getWorksFromToggle().slice(0, 3)}/> : <WorkContainer works={getWorksFromToggle()}/>}
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
