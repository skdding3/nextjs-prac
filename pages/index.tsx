import styles from '../styles/Home.module.css'
import Link from "next/link";
import sanityClient from '@sanity/client'


export default function Home({hello}) {
  return (
    <div className={styles.container}>
      <h1>Blog Home {hello}</h1>

      <Link href="blog/123">123 Post</Link>
    </div>
  )
}


export function getStaticProps() {
  return {
    props: {
      hello: "world"
    }
  }
}
