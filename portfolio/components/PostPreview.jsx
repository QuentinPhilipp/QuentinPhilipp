import DateFormatter from '../components/DateFormatter'
import CoverImage from './CoverImage'
import styles from '../styles/PostPreview.module.css'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  content,
  slug,
}) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.coverContainer}>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className={styles.titleContainer}>
        <Link href={`/blog/${slug}`}>
          <a className={styles.hoverUnderline}>{title}</a>
        </Link>
      </h3>
      <div className={styles.dateContainer}>
        <DateFormatter dateString={date} />
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}