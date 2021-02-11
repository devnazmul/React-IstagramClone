import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Sidebar({imgUrl, userName, name}) {
    return (
        <div className='sidebar col'>
            <Row>
                <Col>
                    <div>
                        <img src={ imgUrl } alt=""/>
                    </div>
                </Col>
                <Col>
                    <Row><h5>{ userName }</h5></Row>
                    <Row><h5>{ name }</h5></Row>
                </Col>
            </Row>
            <Row>
                <h1>Suggest</h1>
            </Row>
            <Row>
                <h1>info</h1>
            </Row>
        </div>
    )
} 
