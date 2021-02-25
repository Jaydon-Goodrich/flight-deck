import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


const about = () => {
    return (
        <Container>
            <Row><h2 className="pt-4">About Flight-Deck Avionics</h2></Row>
            <Row>
                <Col className="pt-4" lg={4} md={12}>
                    <Image src="https://via.placeholder.com/300" rounded />
                </Col>
                <Col className="pt-4" lg={8} md={12}>
                    <p>Flight-Deck Avionics is Utah's premier FAA Certified Repair Station offering Avionics services and installation within the Salt Lake City/ Provo metropolitan area.  With fixed locations at SLC and PVU airports, and complete mobile services, we strive to offer the utmost in convenience to our clients.  The primary goal of Flight-Deck Avionics is to operate a successful business, providing cutting-edge aircraft maintenance, with a degree of safety that is unparalleled.  Honesty, value, and customer service are virtues by which we operate.  With superb technicians, backed by the worlds largest avionics suppliers, we believe that we've got what it takes to meet our goals.....  And yours. </p>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4" lg={8} md={12}>
                    <p>Flight-Deck Avionics is Utah's premier FAA Certified Repair Station offering Avionics services and installation within the Salt Lake City/ Provo metropolitan area.  With fixed locations at SLC and PVU airports, and complete mobile services, we strive to offer the utmost in convenience to our clients.  The primary goal of Flight-Deck Avionics is to operate a successful business, providing cutting-edge aircraft maintenance, with a degree of safety that is unparalleled.  Honesty, value, and customer service are virtues by which we operate.  With superb technicians, backed by the worlds largest avionics suppliers, we believe that we've got what it takes to meet our goals.....  And yours. </p>
                </Col>
                <Col className="pt-4" lg={4} md={12}>
                    <Image src="https://via.placeholder.com/300" rounded />
                </Col>
            </Row>
        </Container>
    )
}

export default about;