import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import fetchStrapi from '../lib/api';
const qs = require('qs');

export default function Home({ projects, works }) {
  return (
    <Layout>
      <Works works={works} />
      <Projects projects={projects}/>
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


  let [projects, works] = await Promise.all([
    fetchStrapi('projects?', queryProjects),
    fetchStrapi('works?', queryWorks),
  ]);
  // works.map((work) => {
  //   // console.log(work.attributes.place.data.attributes.icon);
  //   // console.log(work);

  // })
  works = works.slice(0, 3)
  return {
    props: { projects, works},
    revalidate: 30,
  };
}

