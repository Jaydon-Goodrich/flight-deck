import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const AboutSum = () => {
    return(
        <div>
            <Jumbotron>
                <h1>About Us</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="dark" href="/about">About Us</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default AboutSum;