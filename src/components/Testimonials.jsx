import React from 'react';
import { Quote, Star } from 'lucide-react';
import '../styles/Testimonials.css';

// Ideally this would come from an API or a separate data file
const testimonials = [
    {
        id: 1,
        quote: "PixelPilot completely transformed our e-commerce operations. Their team delivered exceptional quality within our tight deadlines.",
        name: "Rahul Sharma",
        role: "Director of Technology, ShopKart India",
    },
    {
        id: 2,
        quote: "Working with them was a seamless experience. The mobile application they built for us has seen tremendous user engagement.",
        name: "Priya Desai",
        role: "CEO, FinServe Mumbai",
    },
    {
        id: 3,
        quote: "We needed a robust backend system to handle millions of transactions securely, and PixelPilot delivered beyond our expectations.",
        name: "Amit Patel",
        role: "CTO, TechLogistics Bengaluru",
    },
    {
        id: 4,
        quote: "Their technical expertise and attention to detail are amazing. The scalable platform they architected has helped us expand rapidly.",
        name: "Jessica Mitchell",
        role: "Product Manager, InnovateTech NY",
    },
    {
        id: 5,
        quote: "An incredible partner for our digital transformation journey. The team understood our vision quickly and executed it perfectly.",
        name: "David Morrison",
        role: "Founder, HealthBridge Valley",
    }
];

const Testimonials = () => {
    // Duplicate testimonials to create seamless loop
    const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container-fluid">
                <div className="section-header">
                    <span className="section-tag">Testimonials</span>
                    <h2>Client <span className="text-gradient">Success Stories</span></h2>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {marqueeTestimonials.map((item, index) => (
                            <div className="testimonial-card" key={`${item.id}-${index}`}>


                                <p className="testimonial-quote">
                                    "{item.quote}"
                                </p>

                                <div className="testimonial-footer">
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" className="star-icon" />
                                        ))}
                                    </div>

                                    <div className="author-details">
                                        <div className="author-info">
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
