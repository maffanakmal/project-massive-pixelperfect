import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimonials } from '../../assets/index'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <>
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
                                    <div className="testimonial-profile d-flex flex-column justify-content-center align-items-center">
                                        <img className="mb-2" src={testimonial.image} alt="" />
                                        <h5 className="m-0">{testimonial.name}</h5>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Row>
            </Container>

        </>
    )
}

export default Testimonials