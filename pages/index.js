import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbo from '../components/Jumbo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flight-Deck Avionics</title>
        <link rel="icon" href="/testlogo4.png" />
      </Head>
      <Jumbo />
    </div>
  )
}
