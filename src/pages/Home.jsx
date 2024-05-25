import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import LandingPageHero from '../components/fragments/LandingPageHero'
import LandingPageFeature from '../components/fragments/LandingPageFeature'
import LandingPageAbout from "../components/fragments/LandingPageAbout";

import LandingPageChoose from "../components/fragments/LandingPageChoose";
import LandingPagePartner from "../components/fragments/LandingPagePartner";
import LandingPageTestimonials from "../components/fragments/LandingPageTestimonials";
import LandingPageFaq from "../components/fragments/LandingPageFaq";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
            <> 
            <Navbar/>
            <div id="home" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageHero/>
            </div>
            <div id="feature" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageFeature/>
            </div>
            <div id="about" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageAbout/>
            </div>
            <div id="choose" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageChoose/>
            </div>
            <div id="partner" className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPagePartner/>
            </div>
            <div id="testimonial" className="testimonials w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageTestimonials/>
            </div>
            <div id="contact" className=" w-100 min-vh-100 d-flex align-items-center justify-content-center">
                <LandingPageFaq/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
