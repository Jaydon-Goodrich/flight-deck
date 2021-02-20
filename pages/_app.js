import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import NavBar from '../components/Nav';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flight-Deck Avionics</title>
        <link rel="icon" href="/testlogo4.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
