import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/Nav';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
