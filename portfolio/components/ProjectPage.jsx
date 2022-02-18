import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';
import fetchStrapi from '../lib/api';
import styles from "../styles/ProjectPage.module.css";
import Link from 'next/link';
import SkillCard from './SkillCard';
import TechType from './TechType';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Contact from './Contact';

const qs = require('qs');

const ProjectPage = ({ project }) => {
  return (
        <div className={styles.projectLayout}>
            <Link as="/#projects" href="/#projects" passHref>
                    <div className={`${styles.buttonReturn}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 16 16" width="20px" height="20px"><path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"/></svg>
                    <span>View other projects</span>
                    </div>
            </Link>
            <section className={`${styles.projectSection} ${styles.blueBg}`}>
                <div className={styles.projectDescContainer}>
                    <div className={styles.projectTech}>
                        <TechType technoCategory={project.attributes.project_frontend} name="Frontend" key="Frontend"/>
                        <TechType technoCategory={project.attributes.project_backend} name="Backend" key="Backend"/>
                        <TechType technoCategory={project.attributes.project_framework} name="Framework" key="Framework"/>
                        <TechType technoCategory={project.attributes.project_db} name="Database" key="Database"/>
                    </div>
                    <div className={styles.projectInfos}>
                        <RoughNotation strokeWidth="3" color="white" type="highlight" show={true} className={styles.projectName}>{project.attributes.title}</RoughNotation>
                        <p>{project.attributes.short_desc}</p>
                        <div className={styles.outsideLinks}>
                            {project.attributes.demo_url &&
                            <a href={project.attributes.demo_url} className={`${styles.outsideLink} ${styles.lightUp}`}>Demo
                            <svg fill="#003249" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="20px" height="20px">
                                <path d="M 2.40625 1.195313 L 1.695313 1.90625 L 2.050781 2.257813 L 2.757813 2.964844 L 3.109375 3.320313 L 3.820313 2.609375 L 3.464844 2.257813 L 2.757813 1.550781 Z M 13.59375 1.195313 L 13.242188 1.550781 L 12.183594 2.609375 L 12.890625 3.320313 L 13.242188 2.964844 L 14.300781 1.90625 Z M 8 2 C 5.796875 2 4 3.796875 4 6 C 4 7.382813 4.605469 8.179688 5.09375 8.859375 C 5.585938 9.535156 6 10.109375 6 11.5 L 6 12.5 C 6 13.148438 6.425781 13.703125 7.007813 13.90625 C 7.003906 13.9375 7 13.96875 7 14 C 7 14.550781 7.449219 15 8 15 C 8.550781 15 9 14.550781 9 14 C 9 13.96875 9 13.9375 8.996094 13.90625 C 9.578125 13.699219 10 13.148438 10 12.5 L 10 11.5 C 10 10.109375 10.414063 9.535156 10.90625 8.859375 C 11.394531 8.179688 12 7.382813 12 6 C 12 3.796875 10.203125 2 8 2 Z M 8 3 C 9.664063 3 11 4.335938 11 6 C 11 7.117188 10.605469 7.570313 10.09375 8.265625 C 9.652344 8.878906 9.214844 9.742188 9.09375 11 L 6.90625 11 C 6.785156 9.742188 6.347656 8.878906 5.90625 8.265625 C 5.394531 7.570313 5 7.117188 5 6 C 5 4.335938 6.335938 3 8 3 Z M 1 6 L 1 7 L 3 7 L 3 6 Z M 13 6 L 13 7 L 15 7 L 15 6 Z M 3.109375 9.679688 L 2.757813 10.035156 L 2.050781 10.742188 L 1.695313 11.09375 L 2.40625 11.800781 L 3.464844 10.742188 L 3.820313 10.390625 Z M 12.890625 9.679688 L 12.183594 10.390625 L 13.59375 11.800781 L 14.300781 11.09375 L 13.242188 10.035156 Z M 7 12 L 9 12 L 9 12.5 C 9 12.78125 8.78125 13 8.5 13 L 7.5 13 C 7.21875 13 7 12.78125 7 12.5 Z"/></svg>
                            </a>
                            }
                            {project.attributes.github_url &&
                            <a href={project.attributes.github_url} className={`${styles.outsideLink} ${styles.lightUp}`}>Github
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="#003249"><script xmlns=""/>
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                            </a>
                            }
                        </div>
                    </div>             
                </div>
                <p>{project.attributes.description}</p>
            </section>
            <section className={`${styles.projectSection} ${styles.whiteBg}`}>
                <RoughNotation strokeWidth="3" color="#003249" type="underline" show={true} className={styles.separatorTitle}>Preview:</RoughNotation>
                <div className={styles.previews}>
                {project.attributes.image.data.map((image) => (
                    <div className={styles.imageContainer} key={image.id}>
                        {image.attributes.formats.medium &&
                            <Image
                            src={getStrapiMedia(image.attributes.formats.medium)}
                            width={image.attributes.formats.medium.width}
                            height={image.attributes.formats.medium.height}
                            alt={image.attributes.alternativeText}
                            />
                        }
                        {!image.attributes.formats.medium &&
                            <Image
                            src={getStrapiMedia(image.attributes)}
                            width={image.attributes.width}
                            height={image.attributes.height}
                            alt={image.attributes.alternativeText}
                            />
                        }
                        
                    </div>
                    ))}
                </div>
            </section>

            <section className={`${styles.projectSection} ${styles.blueBg}`}>
                <RoughNotation strokeWidth="3" color="white" type="underline" show={true} className={styles.separatorTitle}>What I&apos;ve learned:</RoughNotation>
                <div className={styles.skillCards}>
                {project.attributes.project_skills.data.map((skill) => (
                    <SkillCard skill={skill.attributes} key={skill.id}/>
                    ))}
                </div>
            </section>

            <Contact />

        </div>
  );
};

const queryDefault = qs.stringify({
  populate: '*'
  }, {
    encodeValuesOnly: true,
});

export async function getStaticProps({ params }) {
  const projects = await fetchStrapi(`projects?filters[slug][$eq]=${params.slug}&`, queryDefault);
  projects.map(function(project) {
    console.log(project);
})
console.log("Get static");
  return {
      props: { project: projects[0] },
      revalidate: 1,
    };
  }

export async function getStaticPaths() {
  const projects = await fetchStrapi('projects?', queryDefault);
  return {
      paths: projects.map((project) => ({
        params: {
          slug: project.attributes.slug,
        },
      })),
      fallback: false,
    };
  }

export default ProjectPage;