import React from 'react';
import { Quote, Star } from 'lucide-react';
import '../styles/Testimonials.css';

// Ideally this would come from an API or a separate data file
const testimonials = [
    {
        id: 1,
        quote: "DevService transformed our legacy system into a modern, scalable platform. Their technical expertise and attention to detail are unmatched.",
        name: "Alex Morgan",
        role: "CTO, FinTech Solutions",
    },
    {
        id: 2,
        quote: "We were impressed by how quickly they understood our vision. The mobile app they built helped us secure our Series A funding.",
        name: "Sarah Chen",
        role: "Founder, HealthTech Inc.",
    },
    {
        id: 3,
        quote: "Professional, reliable, and incredibly talented. They delivered our project on time and exceeded all our expectations.",
        name: "Michael Ross",
        role: "Director, E-Commerce Global",
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
