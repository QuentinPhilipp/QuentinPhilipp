import styles from "../styles/Post.module.css";

export default function PostTitle({ children }) {
  return (
    <h1 className={styles.postTitle}>
      {children}
    </h1>
  )
}