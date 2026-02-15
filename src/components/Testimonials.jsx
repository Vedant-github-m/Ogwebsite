import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import '../styles/Testimonials.css';

// Ideally this would come from an API or a separate data file
const testimonials = [
    {
        id: 1,
        quote: "DevService transformed our legacy system into a modern, scalable platform. Their technical expertise and attention to detail are unmatched.",
        name: "Alex Morgan",
        role: "CTO, FinTech Solutions",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
        id: 2,
        quote: "We were impressed by how quickly they understood our vision. The mobile app they built helped us secure our Series A funding.",
        name: "Sarah Chen",
        role: "Founder, HealthTech Inc.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
        id: 3,
        quote: "Professional, reliable, and incredibly talented. They delivered our project on time and exceeded all our expectations.",
        name: "Michael Ross",
        role: "Director, E-Commerce Global",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Testimonials</span>
                    <h2>Client <span className="text-gradient">Success Stories</span></h2>
                </div>

                <div className="carousel-container">
                    <button
                        className="nav-btn prev"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonial-card">
                        <div className="quote-icon-wrapper">
                            <Quote size={40} className="quote-icon" />
                        </div>

                        <p className="testimonial-quote">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        <div className="testimonial-footer">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" className="star-icon" />
                                ))}
                            </div>

                            <div className="author-details">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <h4>{testimonials[currentIndex].name}</h4>
                                    <span>{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="nav-btn next"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
