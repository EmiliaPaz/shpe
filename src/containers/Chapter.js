import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Officer from './Chapter/Officer'

import avatar from '../media/avatar.png';
import avatar2 from '../media/avatar2.png';


export default class Chapter extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <h2> Chapter </h2>
                        <p>
                            Since 1974, over 40 years ago, SHPE has been changing lives by empowering the Hispanic community to realize its fullest potential and impact the world through STEM awareness, access, support, and professional development. At our inception, networking was our primary platform. SHPE’s members — the Familia — are the heartbeat of the organization. Toward that end, SHPE quickly established two student chapters, creating a base that would grow to what we are today–a national organization with over 10,000 student and professional members and more than 225 chapters throughout the nation and in countries outside the United States. 
                        </p>
                        <p>
                            Today, SHPE’s educational programs and events directly serve tens of thousands each year representing a diverse Hispanic community, include: 1) children; 2) undergraduate and graduate students; and 3) academic and industry professionals. Many of these individuals are first-generation Americans and the first in their families to graduate college. 
                        </p>
                        <p>
                            SHPE at the University of Kansas has been a long-standing institution. However, as a part of uplifting the chapter and bringing it into a new era, the 2019-2020 SHPE has created this website on our chapter created by Emilia Paz
                        </p>
                    </Row>


                    <h2> Executive Board '19/'20</h2>

                    <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar} />
                            </div>
                            <Officer name="Adrian Romero " position="President" email="adrian-romero65@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Pedro Martinez" position="Vice President" email="zml_01@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar2}/>
                            </div>
                            <Officer name="Fanny Rangel" position="Secretary" email="fannyrangel@ku.edu"/>
                        </Col>
        
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar} />
                            </div>
                            <Officer name="Sebastian Huayamares" position="Treasurer" email="s147h540@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Miguel Cubero" position="EXPO chair" email="m868c711@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Alejandro Troconis" position="Volunteering/Outreach Chair" email="alejandro.troconis@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Moises Rangel" position="Volunteering/Outreach Chair" email="moisesrangel@ku.edu"/>
                        </Col>
                    </Row>



                    {/* <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar} />
                            </div>
                            <Officer name="Adrian Romero " position="President" email="adrian-romero65@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Pedro Martinez" position="Vice President" email="zml_01@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar2}/>
                            </div>
                            <Officer name="Fanny Rangel" position="Secretary" email="fannyrangel@ku.edu"/>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar} />
                            </div>
                            <Officer name="Sebastian Huayamares" position="Treasurer" email="s147h540@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Miguel Cubero" position="EXPO chair" email="m868c711@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Alejandro Troconis" position="Volunteering/Outreach Chair" email="alejandro.troconis@ku.edu"/>
                        </Col>
                        <Col xs lg="3">
                            <div class="exec-avatar">
                                <img src={avatar}/>
                            </div>
                            <Officer name="Moises Rangel" position="Volunteering/Outreach Chair" email="moisesrangel@ku.edu"/>
                        </Col>
                    </Row> */}
        
                    
                </Container>

             </div>
        )
    }
}