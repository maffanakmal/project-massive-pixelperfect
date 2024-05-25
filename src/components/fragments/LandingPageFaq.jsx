import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import faqImg from '../../assets/img/asking-question.png'

const LandingPageFaq = () => {
    return (
        <>
            <Container className="faq-wrapper border rounded-3 mx-3">
                <Row className="d-flex align-items-center p-lg-5 p-4">
                    <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-white text-center">
                            Gimana? Masih bimbang dan bingung?
                        </h3>
                        <h2 className="text-white text-center fw-bold">Ini jawabannya!</h2>
                        <button className="btn-faq mt-4 fw-bolder rounded-5 w-25 fs-6">FAQ</button>
                    </Col>
                    <Col lg="6" className="text-center">
                        <img src={faqImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPageFaq