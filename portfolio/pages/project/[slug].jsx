import Image from 'next/image';
import { getStrapiMedia } from '../../lib/media';
import fetchStrapi from '../../lib/api';
import ProjectPage from "../../components/ProjectPage";

const qs = require('qs');

const PortfolioItem = ({ portfolio }) => {
  return (
    <ProjectPage project={portfolio} />
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

export default PortfolioItem;