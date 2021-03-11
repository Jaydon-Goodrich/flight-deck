import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbo from '../components/Jumbo'
import Reviews from '../components/Reviews'
import AboutSum from  '../components/AboutSum'
import ServiceSum from  '../components/ServiceSum'
import ProjectSum from  '../components/ProjectSum'
import Image from 'next/image';




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flight-Deck Avionics</title>
        <link rel="icon" href="/testlogo4.png" />
      </Head>
      <Image 
        src={`/flight-deck-logo.jpg`}
        alt="Logo of flight-deck avionics"
        width={500}
        height={500}
      />
      {/* <h1 style={{textAlign:'center'}}>Flight-Deck Avionics</h1> */}
      <AboutSum/>
      <ServiceSum />
      <ProjectSum />
      <Jumbo />
      <Reviews />

    </div>
  )
}
