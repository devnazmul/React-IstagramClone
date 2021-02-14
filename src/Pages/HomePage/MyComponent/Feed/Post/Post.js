import React from 'react'
import "./Post.css";
import { Col, Row } from 'react-bootstrap';

export default function Post({name, picUrl}) {
    return (
        <div className='post_container m-0 p-0'>
            <Row>
                <Col className='d-flex'>
                    <div className='post_profile '>
                        <img src={ picUrl } alt=""/>
                    </div>
                    <div>
                        <h5>{name}</h5>
                    </div>
                </Col>
                <Col>
                    
                </Col>
                <Col>

                </Col>
                <Col>

                </Col> 
                <Col>

                </Col>
            </Row>
        </div>
    )
}
