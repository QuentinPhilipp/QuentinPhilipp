import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import About from '../components/About';

import fetchStrapi from '../lib/api';
const qs = require('qs');

export default function Home({ projects, works, links, about, profile }) {
  return (
    <Layout>
      <Hero content={projects}/>
      <About content={about} links={links} profile={profile}/>
      <Works works={works} />
      {/* <Banner content="Check my projects" nextComponent={<Projects projects={projects}/>} /> */}
      <Projects projects={projects}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryWorks = qs.stringify({
    populate: {
      place: {
        populate: '*',
      },
      stack: '*',
      contexts: '*',
      image: '*',
    },
    }, {
      encodeValuesOnly: true,
  });
  const queryDefault = qs.stringify({
    populate: '*'
    }, {
      encodeValuesOnly: true,
  });
  const querySortDate = qs.stringify({
    sort: ['date:desc'],
    populate: '*'
    }, {
      encodeValuesOnly: true,
  });

  let [projects, works, links, about, profile] = await Promise.all([
    fetchStrapi('projects?', querySortDate),
    fetchStrapi('works?', queryWorks),
    fetchStrapi('links?', queryDefault),
    fetchStrapi('about?', queryDefault),
    fetchStrapi('profile-picture?', queryDefault),
  ]);
 
  // console.log(unsortedProjects);

  works = works.slice(0, 3)
  return {
    props: { projects, works, links, about, profile},
  };
}
