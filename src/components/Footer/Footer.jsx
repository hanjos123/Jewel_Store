import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import './footer.css'
import logo_footer from '../../assets/images/footer_logo.png'

const Footer = () => {
  return <footer>
    <Row>
        <Col xs={0} xl={2}></Col>
        <Col xs={24} xl={20} className="d-flex">
            <div className="footer__content">
                <div className='footer__left'>
                    <Link to='/'>
                        <img src={logo_footer} alt="" />
                        2021 _____ RIVERBURN
                    </Link>
                </div>

                <div className="footer__right">
                    <Link to='#' target="_blank">Twitter</Link>
                    <Link to='#' target="_blank">Facebook</Link>
                    <Link to='#' target="_blank">Instagram</Link>
                </div>
            </div>
            
        </Col>
        <Col xs={0} xl={2}></Col>
    </Row>
  </footer>
}

export default Footer