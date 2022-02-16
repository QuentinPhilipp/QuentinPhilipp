import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';
import fetchStrapi from '../lib/api';
import styles from "../styles/ProjectPage.module.css";
import Link from 'next/link';
import SkillCard from './SkillCard';
import TechType from './TechType';

const qs = require('qs');

const ProjectPage = ({ project }) => {
  return (
        <div className={styles.projectLayout}>
            {/* <Link as="/" href="/#projects" passHref>
                    <div className={`${styles.buttonReturn}`}>
                        View other projects
                    </div>
            </Link> */}
            <div className={styles.projectDescContainer}>
                <div className={styles.projectTech}>
                    <TechType technoCategory={project.attributes.project_frontend} name="Frontend"/>
                    <TechType technoCategory={project.attributes.project_backend} name="Backend"/>
                    <TechType technoCategory={project.attributes.project_framework} name="Framework"/>
                    <TechType technoCategory={project.attributes.project_db} name="Database"/>
                </div>
                <div className={styles.projectInfos}>
                    <h1>{project.attributes.title}</h1>
                    <p>{project.attributes.description}</p>
                    {project.attributes.demo_url &&
                    <a href={project.attributes.demo_url}>Demo</a>
                    }
                    {project.attributes.github_url &&
                    <a href={project.attributes.github_url}>Github</a>
                    }
                </div>             
            </div>
            <div className={styles.previews}>
            {project.attributes.image.data.map((image) => (
                <div className={styles.imageContainer}>
                    <Image
                        src={getStrapiMedia(image.attributes)}
                        width={800}
                        height={500}
                        alt="Project preview"
                        />
                </div>
                ))}
            </div>
            <div className={styles.skillCards}>
            {project.attributes.project_skills.data.map((skill) => (
                <SkillCard skill={skill.attributes} key={skill.id}/>
                ))}
            </div>


        </div>
  );
};

const queryDefault = qs.stringify({
  populate: '*'
  }, {
    encodeValuesOnly: true,
});

export async function getStaticProps({ params }) {
  const portfolio = await fetchStrapi(`projects?filters[slug][$eq]=${params.slug}&`, queryDefault);
  return {
      props: { portfolio: portfolio[0] },
      revalidate: 1,
    };
  }

export async function getStaticPaths() {
  const portfolios = await fetchStrapi('projects?', queryDefault);
  return {
      paths: portfolios.map((portfolio) => ({
        params: {
          slug: portfolio.attributes.slug,
        },
      })),
      fallback: false,
    };
  }

export default ProjectPage;