import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'


const Jumbo = () => {

    return (
        <Jumbotron>
            <h1>Reach Out For A Quote</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="dark" href="/contact">Contact Us</Button>
            </p>
        </Jumbotron>
    );

}

export default Jumbo;