import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './MyComponent/Header/Header'
import Sidebar from './MyComponent/Sidebar/Sidebar'
import StoryContainer from './MyComponent/StoryContainer/StoryContainer'
import profile_main from "../../assets/imgs/profile_main.jpg";
import Feed from './MyComponent/Feed/Feed'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Container className='justify-content-center'>
                <Row className=''>
                    <Col md="8" sm="12" className='p-1 my-0'>
                        <StoryContainer />
                        <Feed />
                    </Col>
                    <Col md="4" sm="12" className='d-md-block d-none'>
                        <Sidebar name="Chadni Khan" userName="devns_chad" imgUrl={ profile_main } />
                    </Col>
                </Row>
            </Container>
            {/* sidebar */}
            {/* feed */}
            {/* footerBar */}
        </div>
    )
}
