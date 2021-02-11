import React from 'react'
import './Header.css'

import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
// ICONS
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import profile_main from "../../../../assets/imgs/profile_main.jpg";

export default function Header() {
    return (
        <div className='header'>
            <Container>
                <Row className="header_container">
                    <Col xs="5" sm="6" md="4" lg="4" xl="4">
                        <div className='d-flex align-items-center justify-content-start'>
                            <img className='logo m-0 p-0' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram-logo" />
                        </div>
                    </Col>
                    
                    <Col className='d-none d-md-flex' lg="4" xl="4">
                        <div className='input_container d-none d-sm-flex  justify-content-center' >
                            <input className='search_bar' type="text" placeholder='search' />
                            <span className='search_btn'><SearchOutlinedIcon style={{ fontSize: 15 }}/></span>
                        </div>
                    </Col>
                    
                    <Col xs="7" sm="6" md="4" lg="4" xl="4">
                        <div className='d-flex align-items-center justify-content-end'>
                           <div className='menu'>
                                <div className='home_icon'><HomeOutlinedIcon color="secondary" style={{ fontSize: 30 }}/></div>
                                <div className='sms_icon'><TelegramIcon color="secondary" style={{ fontSize: 30 }}/></div>
                                <div className='explore_icon'><ExploreOutlinedIcon color="secondary" style={{ fontSize: 30 }}/></div>
                                <div className='love_icon'><FavoriteBorderIcon color="secondary" style={{ fontSize: 30 }}/></div>
                                <div className='avater_icon'><img className='avater_img' src={ profile_main } alt=""/></div>
                            </div> 
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
