import DateFormatter from '../components/DateFormatter'
import CoverImage from '../components/CoverImage'
import PostTitle from '../components/PostTitle'
import styles from "../styles/Post.module.css";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p className={styles.postAuthor}>{author}</p>
      <div className={styles.postCoverContainer}>
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className={styles.postDate}>
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}