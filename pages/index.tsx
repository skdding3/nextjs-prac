import styles from '../styles/Home.module.css'
import sanityClient from '@sanity/client'


export default function Home({hello}) {
  return (
    <div className={styles.container}>
      <h1>Blog Home {hello}</h1>
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
