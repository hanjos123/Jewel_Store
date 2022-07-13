import React from 'react'
import { Button, Row, Col, Modal, Input } from 'antd'
import './login.css'
import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Login = (isModalVisible) => {
  return (
    <>
        <Modal visible={isModalVisible} footer={null}>
            <div className="heading">ĐĂNG NHẬP</div>
            <form>
                <Row>
                    <Col xs={24}>
                        <Input size="large" placeholder="Nhập email của bạn" prefix={<UserOutlined />} />
                    </Col>

                    <Col xs={24} className='mt-10'>
                        <Input.Password size="large" placeholder="Nhập mật khẩu của bạn" prefix={<LockOutlined />} iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} />
                    </Col>

                    <Col xs={24} className='mt-10'>
                        <div className="tool">
                            <Button className='login'>Đăng nhập</Button>
                            <div className="toolLink">
                                <span>Đăng ký</span>
                                <span>Quên mật khẩu</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </form>
        </Modal>
    </>
  )
}

export default Login