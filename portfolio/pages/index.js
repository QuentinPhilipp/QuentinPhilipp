import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import fetchStrapi from '../lib/api';

export default function Home({ projects, works }) {
  return (
    <Layout>
      <Projects projects={projects}/>
      {/* <Works works={works} /> */}
    </Layout>

  );
}

export async function getStaticProps() {
  const [projects, works] = await Promise.all([
    fetchStrapi('projects?'),
    fetchStrapi('works?'),
  ]);
  return {
    props: { projects, works },
    revalidate: 30,
  };
}

