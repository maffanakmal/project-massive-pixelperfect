import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { heroSlide } from '../../assets/index'
import readmoreImg from "../../assets/img/brainstorming-hero.png"

import React from 'react'

const LandingPageHero = () => {
    return (
        <>
            <Container className="hero-wrapper rounded-3 mx-3">
                <Carousel>
                    {heroSlide.map((hero) => {
                        return (
                            <Carousel.Item key={hero.id} interval={hero.delay}>
                                <Row className="box-header d-flex align-items-center p-5">
                                    <Col lg="6" className="pt-lg-0">
                                        <img src={hero.image} alt="Hero Img" />
                                    </Col>
                                    <Col lg="6" className="text-center">
                                        <h3 className="text-white">{hero.text}</h3>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        );
                    })}
                    {/* <Carousel.Item>
                            <Row className="d-flex align-items-center p-lg-5 p-4">
                                <Col lg="6" className="pt-lg-0 d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="text-white text-center fw-bold">Tips and Trick</h2>
                                    <h4 className="text-white text-center">
                                        Mengelola keuangan yang baik dan mudah
                                    </h4>
                                    <p className="text-white text-center">Buat anggaran bulanan di awal bulan, catat pengeluaran rutin, dan prioritaskan tagihan listrik, kredit, serta biaya hidup.</p>
                                    <button className="btn-readmore mt-4 fw-bolder rounded-5 w-25 fs-6">Read More <i class="fa-solid fa-angle-right"></i></button>
                                </Col>
                                <Col lg="6" className="text-center">
                                    <img src={readmoreImg} alt="" />
                                </Col>
                            </Row>
                        </Carousel.Item> */}
                </Carousel>
            </Container>

        </>
    )
}

export default LandingPageHero