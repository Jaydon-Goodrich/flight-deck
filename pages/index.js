import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbo from '../components/Jumbo'
import Reviews from '../components/Reviews'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flight-Deck Avionics</title>
        <link rel="icon" href="/testlogo4.png" />
      </Head>
      <h1>Flight-Deck Avionics</h1>
      <h1>About Sum</h1>
      <h1>Services Sum</h1>
      <h1>Projects Sum</h1>
      <Reviews />
      <Jumbo />

    </div>
  )
}
