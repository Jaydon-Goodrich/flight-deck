import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap/'
import Head from 'next/head'



const services = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Services</title>
                <link rel="icon" href="/testlogo4.png" />
            </Head>
            <h2>Services</h2>

            <Container>
                <Row>
                    <h3>Class Ratings:</h3>
                    <Row>
                        <Col md={12} lg={4}>
                            <Card className={styles.card}>
                                <Card.Img src="https://via.placeholder.com/300"/>
                                <Card.ImgOverlay>
                                    <Card.Title style={{bottom: 10}}>Instrument</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className={styles.card}>
                                <Card.Img src="https://via.placeholder.com/300"/>
                                <Card.ImgOverlay>
                                    <Card.Title>Radio</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className={styles.card}>
                                <Card.Img src="https://via.placeholder.com/300"/>
                                <Card.ImgOverlay>
                                    <Card.Title>Accessory</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <h3>Limited Ratings:</h3>
                </Row>
                <Row>
                    <h3>Primary Services:</h3>
                </Row>
                <Row>
                    <h3>Business Partners:</h3>
                    <Col>
                        <ul>
                            <li>Bendix/King</li>
                            <li>Universal Avionics</li>
                            <li>L-3 Avionics</li>
                            <li>Garmin International</li>
                            <li>Avidyne Corporation</li>
                            <li>Genesys Aerosystems Group (Chelton / Cobham / S-Tec)</li>
                            <li>Northern Airborne Technology</li>
                            <li>Technisonic</li>
                            <li>AmSafe Aviation</li>
                            <li>Aircraft Electronics Association</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Rockwell Collins</li>
                            <li>Aspen Avionics</li>
                            <li>J.P. Instruments</li>
                            <li>Mid-Continent Instruments and Avionics</li>
                            <li>Sandel Avionics</li>
                            <li>PS Engineering</li>
                            <li>ACR/Artex</li>
                            <li>FreeFlight Systems</li>
                            <li>Cobham</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default services;