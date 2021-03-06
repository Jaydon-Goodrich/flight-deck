import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Reviews = () => {
    return(
        <div>
        <Carousel style={{maxWidth:956, paddingBottom:30}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='/reviewImage1.png'
            alt="First slide"
            max-width={500}
            height={500}
            />
            <Carousel.Caption>
            <h3>Jim and his team are great! Would recommend for all!</h3>
            <p style={{textAlign:'right', fontSize:20}}>-James Mayfield</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='/reviewImage1.png'
            alt="First slide"
            max-width={500}
            height={500}
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='/reviewImage1.png'
            alt="First slide"
            max-width={500}
            height={500}
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Reviews;