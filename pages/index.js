import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbo from '../components/Jumbo'
import Reviews from '../components/Reviews'
import AboutSum from  '../components/AboutSum'
import ServiceSum from  '../components/ServiceSum'
import ProjectSum from  '../components/ProjectSum'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flight-Deck Avionics</title>
        <link rel="icon" href="/testlogo4.png" />
      </Head>
      <h1>Flight-Deck Avionics</h1>
      <AboutSum/>
      <ServiceSum />
      <ProjectSum />
      <Jumbo />
      <Reviews />

    </div>
  )
}
