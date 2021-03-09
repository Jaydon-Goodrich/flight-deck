import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import NavBar from '../components/Nav';

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
