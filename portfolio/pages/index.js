import Layout from '../components/Layout';
import fetchFromCMS from '../lib/service';
import Image from 'next/image';
import Link from 'next/link';
import processMarkdown from '../lib/processMarkdown';

export default function Home({ portfolioItems }) {
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start ">
          {portfolioItems.map((portfolio) => (
            <div className="col-md-6">
              <div className="entry mb-3">
                <Link as={`/portfolio/${portfolio.attributes.slug}`} href="/portfolio/[id]">
                  <div className="main-image">
                    <Image
                      src={portfolio.attributes.image.data.attributes.name}
                      width={600}
                      height={400}
                      alt={portfolio.attributes.Headline}
                    />
                    <h1>{portfolio.attributes.Headline}</h1>
                    <p>{portfolio.attributes.content}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolioItems = await fetchFromCMS('portfolios?');
  return {
    props: { portfolioItems },
    revalidate: 30,
  };
}