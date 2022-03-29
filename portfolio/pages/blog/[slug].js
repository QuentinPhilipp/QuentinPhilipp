import { useRouter } from 'next/router'
import PostBody from '../../components/PostBody'
import Header from '../../components/Header'
import PostHeader from '../../components/PostHeader'
import fetchStrapi from '../../lib/api'
import PostTitle from '../../components/PostTitle'
import Head from 'next/head'
import markdownToHtml from '../../lib/processMarkdown'
import styles from "../../styles/Post.module.css";
const qs = require('qs');

export default function Post({ post, preview }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className={styles.articleContainer}>
            <Head>
              <title>
                {post.title}
              </title>
              {post.attributes.ogImage.data.attributes.formats.medium &&
              <meta property="og:image" content={post.attributes.ogImage.data.attributes.formats.medium.url} />
              }
              {!post.attributes.ogImage.data.attributes.formats.medium &&
              <meta property="og:image" content={post.attributes.ogImage.data.attributes} />
              }
              </Head>
            <PostHeader
              title={post.attributes.title}
              coverImage={post.attributes.coverImage.data.attributes}
              date={post.attributes.date}
              author={post.attributes.author}
            />
            <PostBody content={post.attributes.content} />
          </article>
        </>
      )}
    </div>
  )
}

const queryDefault = qs.stringify({
  populate: '*'
  }, {
    encodeValuesOnly: true,
});

export async function getStaticProps({ params }) {
  console.log("Searching for slug", params.slug)
  const posts = await fetchStrapi(`posts?filters[slug][$eq]=${params.slug}&`, queryDefault);
  
  const post = posts[0]
  await parsePost(post);

  return {
    props: { post: post },
    revalidate: 1,
  };
}

async function parsePost(post) {
    post.attributes.content = await markdownToHtml(post.attributes.content);
}

export async function getStaticPaths() {
  const posts = await fetchStrapi('posts?', queryDefault);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      }
    }),
    fallback: false,
  }
}