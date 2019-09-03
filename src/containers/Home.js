import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h4> Mission: </h4>  
                        <p> 
                            SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
                        </p>

                        <h4> Vision: </h4>  
                        <p> 
                            SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.
                        </p>

                        <h4> Values: </h4>  
                        <p>
                            Familia: We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.
                        </p>
                        <p>
                            Service: We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding.
                        </p>
                        <p>
                            Education: We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other.
                        </p>
                        <p>
                            Resilience: We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism.
                        </p>

                        <h4> Strategic Vision: </h4>  
                        <p>
                            SHPE’s current 2018-2020 Strategic Plan is aimed at preparing Hispanics for success in STEM as they progress into higher levels of responsibility and influence, as well as supporting companies to recruit, develop and retain top Hispanic talent in STEM. SHPE believes that the realization of these two overarching goals will not only foster a strong, diverse workforce, but will also drive business growth and create a sustainable competitive advantage for our corporate partners.
                        </p>

                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <Button href="https://shpe.org/" variant="danger" block>SHPE National website link </Button>
                        </Col>
                        <Col xs lg="6">
                            <Button href="https://shpe.org/join-membershpe-renewal/" variant="danger" block>SHPE registation link </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}