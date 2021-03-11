import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const ServiceSum = () => {
    return(
        <div>
            <Jumbotron>
                <h1 style={{textAlign:'right'}}>Services</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button style={{float:'right'}} variant="dark" href="/services">Services</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default ServiceSum;