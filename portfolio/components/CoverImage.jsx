import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media';
import styles from "../styles/CoverImage.module.css";

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={getStrapiMedia(src)}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      objectFit='scale-down'
      width={width}
      height={height}
    />
  )
  return (
    <div className={styles.coverImage}>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}