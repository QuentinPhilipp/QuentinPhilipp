import NextScript from 'next/document';

import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Banner from '../components/Banner';

import fetchStrapi from '../lib/api';
const qs = require('qs');

export default function Home({ projects, works, links }) {
  return (
    <Layout>
      <Works works={works} />
      {/* <Banner content="Check my projects" nextComponent={<Projects projects={projects}/>} /> */}
      <Projects projects={projects}/>
      <Contact links={links} />
    </Layout>
  );
}

export async function getStaticProps() {
  const queryProjects = qs.stringify({
    populate: '*'
    }, {
      encodeValuesOnly: true,
  });
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
  const queryLinks = qs.stringify({
    populate: '*'
    }, {
      encodeValuesOnly: true,
  });


  let [projects, works, links] = await Promise.all([
    fetchStrapi('projects?', queryProjects),
    fetchStrapi('works?', queryWorks),
    fetchStrapi('links?', queryLinks),
  ]);
 
  works = works.slice(0, 3)
  return {
    props: { projects, works, links},
    revalidate: 30,
  };
}
