import Link from 'next/link'
import styles from "../styles/Post.module.css";

export default function Header() {
  return (
    <h2 className={styles.backToHome}>
      <Link href="/">
        <a className={styles.hoverUnderline}>Back</a>
      </Link>
    </h2>
  )
}