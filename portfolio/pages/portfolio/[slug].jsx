import Layout from '../../components/Layout';

import Image from 'next/image';
import fetchFromCMS from '../../lib/service';

const PortfolioItem = ({ portfolio }) => {
  return (
    <Layout>
      <div className="row">
        <div className="portfolio-image text-center mb-4">
          <div className="col-md-12">
            <Image
              src={portfolio.attributes.image.data.attributes.name}
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-content">
          <div className="col-md-12">
            <div className="portfolio-headline text-center m-2">
              <h1>{portfolio.attributes.Headline}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: portfolio.attributes.content}}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const portfolio = await fetchFromCMS(`portfolios?slug=${params.slug}`);
  return {
      props: { portfolio: portfolio[0] },
      revalidate: 1,
    };
  }

export async function getStaticPaths() {
  const portfolios = await fetchFromCMS('portfolios?');
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