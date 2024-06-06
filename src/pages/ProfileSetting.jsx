import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './profileSetting.css'

const ProfileSetting = () => {
  return (
    <>
      <Container className='setting-container min-vh-100 d-flex justify-content-center align-items-center'>
        <Row className="settings">
          <h1>Pengaturan</h1>
          <div className='setting-cards d-flex justify-content-center'>

            <Row>
              <Col>
                <div className="card-setting p-3 border bg-light">
                  <h3> Profile</h3>
                  <p>Kelola informasi akun Anda di sini. Perbarui detail pribadi, email, dan nomor handphone untuk menjaga akun Anda.</p>
                </div>
              </Col>
              <Col>
                <div className="card-setting p-3 border bg-light">
                  <h3>Mata Uang</h3>
                  <p>Ubah pengaturan mata uang Anda hari ini dan nikmati pengalaman yang lebih personalisasi dan efisien.</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="card-setting p-3 border bg-light">
                  <h3>Bahasa</h3>
                  <p>Pilih bahasa yang Anda inginkan. Kami menawarkan berbagai pilihan bahasa.</p>
                </div>
              </Col>
              <Col>
                <div className="card-setting p-3 border bg-light">
                  <h3>Tema Gelap</h3>
                  <p>Rasakan kesan elegan dan hemat daya dengan Tema Gelap. Aktifkan sekarang untuk gaya yang lebih keren dan baterai yang lebih awet.</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="card-setting m-2 p-3 border bg-light">
                  <h3>Login & Security</h3>
                  <p>Keamanan akun Anda adalah prioritas kami. Ganti kata sandi Anda secara berkala untuk menjaga keamanan.</p>
                </div>
              </Col>
            </Row>

          </div>

        </Row>
      </Container>
    </>
  )
}

export default ProfileSetting
