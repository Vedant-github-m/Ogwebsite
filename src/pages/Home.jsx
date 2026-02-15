import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
