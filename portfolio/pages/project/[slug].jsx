import Image from 'next/image';
import { getStrapiMedia } from '../../lib/media';
import fetchStrapi from '../../lib/api';
const qs = require('qs');

const PortfolioItem = ({ portfolio }) => {
  return (
    <div>
      <div className="row">
        <div className="portfolio-image text-center mb-4">
          <div className="col-md-12">
            <Image
              src={getStrapiMedia(portfolio.attributes.image.data[0].attributes)}
              width={1000}
              height={500}
              alt="Project preview"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-content">
          <div className="col-md-12">
            <div className="portfolio-headline text-center m-2">
              <h1>{portfolio.attributes.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: portfolio.attributes.content}}/>
          </div>
        </div>
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

export default PortfolioItem;