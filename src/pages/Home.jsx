import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ourFeature, heroSlide, whyChoose, ourPartner, testimonials } from "../assets/index";
import aboutImg from "../assets/img/about-img.png";
import faqImg from "../assets/img/asking-question.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <div className="home-page">
            <header id="home" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <Container className="hero-wrapper border rounded-3 mx-3">
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
                    </Carousel>
                </Container>
            </header>
            <div className="section-padding features w-100 min-vh-100" id="feature">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Our Features</h1>
                            <p>Innovative Tools Tailored to Your Financial Needs</p>
                        </Col>
                    </Row>
                    <Row className="text-center d-flex justify-content-center align-items-center">
                        {ourFeature.map((feature) => {
                            return (
                                <Col
                                    lg="6"
                                    sm="6"
                                    key={feature.id}
                                    className="feature-card border rounded-2"
                                >
                                    <div className="feature p-lg-5 p-4">
                                        <img src={feature.image} alt="" />
                                        <h5 className="mt-4 mb-3">{feature.title}</h5>
                                        <p>{feature.desc}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <div className="section-padding about w-100 min-vh-100 d-flex align-items-center justify-content-center" id="about">
                <Container className="about-wrapper border rounded-3 mx-3">
                    <Row className="d-flex align-items-center p-lg-5 p-4">
                        <Col lg="6" className="pt-lg-0">
                            <h3 className="text-white">
                                Membantu Anda meraih tujuan keuangan dengan lebih mudah.
                            </h3>
                            <p className="text-white">
                                Kami hadir dengan semangat untuk merubah pandangan Anda terhadap
                                pencatatan keuangan. Dalam situs kami, Anda tidak hanya akan
                                menemukan alat pencatatan keuangan yang lengkap, tetapi juga
                                fitur-fitur canggih seperti pembagian tagihan, daftar keinginan,
                                dan manajemen tabungan yang intuitif.
                            </p>
                        </Col>
                        <Col lg="6" className="text-center">
                            <img src={aboutImg} alt="" />
                        </Col>
                    </Row>
                    <Row className="p-lg-5 p-4">
                        <Col className="d-flex justify-content-center">
                            <p className="text-white">
                                Trusted by more than <span className="fw-bold">500,000+</span>
                                <br />
                                active users across the globe{" "}
                            </p>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="px-3 text-white fw-bold">50K</h1>
                                <p className="text-white">
                                    Rating <br /> User
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="px-3 text-white fw-bold">80%</h1>
                                <p className="text-white">
                                    Satisfied and <br /> Happy Clients
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section-padding choose w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Why Choose Us</h1>
                            <p>
                                “Our finance management website ensures meticulous and efficient
                                financial record-keeping, providing clarity and control over
                                your finances like never before”
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center d-flex justify-content-center align-items-center">
                        {whyChoose.map((choose) => {
                            return (
                                <Col key={choose.id} className="choose-card mx-3">
                                    <div className="choose p-lg-5 p-4">
                                        <img src={choose.image} className="mb-3" alt="" />
                                        <h4>{choose.title}</h4>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <div className="section-padding partner w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Our Partner</h1>
                            <p>
                                Collaborating with Industry Leaders for Comprehensive Solutions
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center d-flex justify-content-center align-items-center">
                        {ourPartner.map((partner) => {
                            return (
                                <Col key={partner.id} className="partner-card mx-3">
                                    <div className="partner p-lg-5 p-4">
                                        <img src={partner.image} className="mb-3" alt="" />
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <div className="section-padding testimonials w-100 min-vh-100" id="testimonial">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>What People Say</h1>
                            <p>
                                See what people is saying about us
                            </p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                }
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial) => {
                                return (
                                    <SwiperSlide key={testimonial.id} className="d-flex flex-column p-5 shadow-sm border rounded">
                                        <div className="star d-flex mb-3">
                                            <i className={testimonial.star1}></i>
                                            <i className={testimonial.star2}></i>
                                            <i className={testimonial.star3}></i>
                                            <i className={testimonial.star4}></i>
                                            <i className={testimonial.star5}></i>
                                        </div>
                                        <p>{testimonial.desc}</p>
                                        <div className="testimonial-profile">
                                            <img className="mb-2" src={testimonial.image} alt="" />
                                            <h5 className="m-0">{testimonial.name}</h5>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </div>
            <div className="section-padding faq w-100 min-vh-100 d-flex align-items-center justify-content-center" id="contact">
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
            </div>

        </div>
    );
};

export default Home;
