import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const ProjectSum = () => {
    return(
        <div>
            <Jumbotron>
                <h1>Projects</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="dark" href="/articles">About Us</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default ProjectSum;