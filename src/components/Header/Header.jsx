import React, { useState } from 'react'
import './header.css'
import { Col, Row } from 'antd' 

import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { MENU__DATA } from '../../assets/data/data'

import Login from '../ui/Login/Login'

const Header = () => {

  const [isShowLogin, setIsShowLogin] = useState(false);

  const showLogin = () => {
    setIsShowLogin(true);
  }

  return (
    <header className="header">
      <Row className='d-flex'>
        <Col xs={1} xl={2}></Col>
        <Col xs={22} xl={20} className='d-flex'>
          <div className="header__logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          
          <ul className="nav__list">
            {MENU__DATA.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} className= { navClass => navClass.isActive ? 'active' : ''} >{item.display}</NavLink>
                </li>
            ))}
            <li className="nav__item" onClick={showLogin}>
              <NavLink to='#'>LOGIN</NavLink>
            </li>
            <li className="nav__item cart">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ButtonHeader_cartIcon__2lek3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></svg>
              <div className='nav__item-totalcart'>1</div>
            </li>
          </ul>
        </Col>

        <Col xs={1} xl={2}></Col>

      </Row>
      {isShowLogin && <Login setIsShowLogin={setIsShowLogin} />}
    </header>
  )
}

export default Header