import Layout from '../components/Layout';
import Works from '../components/Works';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';

import fetchStrapi from '../lib/api';

const qs = require('qs');

export default function Home({ projects, works, links, about, profile, contactDetails }) {
  return (
    <Layout contactDetails={contactDetails}>
      <Hero content={projects}/>
      <About content={about} links={links} profile={profile}/>
      <Works works={works} defaultCount={3}/>
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

const contactDetails = {
  text: contactText.attributes.content,
  email: email.attributes.content,
  phone: phone.attributes.content,
  address: address.attributes.content
}

console.log(contactDetails);
return {
  props: { projects, works, links, about, profile, contactDetails},
};
}
