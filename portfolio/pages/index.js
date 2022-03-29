import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Hero from '../components/Hero';
import About from '../components/About';
import Head from 'next/head';
import MetaTags from '../components/MetaTag';

import fetchStrapi from '../lib/api';
import markdownToHtml from '../lib/processMarkdown';

const qs = require('qs');

export default function Home({ projects, works, links, about, profile, contactDetails, articles }) {
  return (
    <Layout contactDetails={contactDetails}>
      <Head>
        <title>Quentin Philipp | Portfolio</title>
        <MetaTags title={"Quentin Philipp | Portfolio"}/>
      </Head>
      <Hero content={projects}/>
      <About content={about} links={links} profile={profile}/>
      <Works works={works} defaultCount={3}/>
      {/* <Banner content="Check my projects" nextComponent={<Projects projects={projects}/>} /> */}
      <Projects projects={projects}/>
      <Articles articles={articles}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryWorks = qs.stringify({
    sort: ['startdate:desc'],
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
  
  const querySortDate = qs.stringify({
    sort: ['date:desc'],
    populate: '*'
    }, {
      encodeValuesOnly: true,
  });


const projects = await fetchStrapi('projects?', querySortDate)
const works = await fetchStrapi('works?', queryWorks)
const links = await fetchStrapi('links?')
const about = await fetchStrapi('about?')
const profile = await fetchStrapi('profile-picture?')
const email = await fetchStrapi('email?')
const contactText = await fetchStrapi('contact-text?')
const phone = await fetchStrapi('phone-number?')
const address = await fetchStrapi('address?')
const articles = await fetchStrapi('posts?')


const contactDetails = {
  text: contactText.attributes.content,
  email: email.attributes.content,
  phone: phone.attributes.content,
  address: address.attributes.content
}

  await parseWorks(works);
  await parseProjects(projects);
  await parseArticles(articles);

  return {
    props: { projects, works, links, about, profile, contactDetails, articles},
  };
}

async function parseWorks(works) {
  works.forEach(async function(work) {
    work.attributes.content = await markdownToHtml(work.attributes.content);
  });
}

async function parseArticles(articles) {
  articles.forEach(async function(article) {
    article.attributes.content = await markdownToHtml(article.attributes.content);
  });
}

async function parseProjects(projects) {
  projects.forEach(async function(project) {
    project.attributes.description = await markdownToHtml(project.attributes.description);
  });
}