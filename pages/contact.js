import ContactForm from '../components/ContactForm'
import Head from 'next/head'


const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/testlogo4.png" />
            </Head>
            <h2 style={{textAlign:'center'}}>Contact Us</h2>
            <ContactForm />
        </div>
    )
}

export default contact;