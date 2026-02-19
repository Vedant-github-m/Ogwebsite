import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Navbar />

            <main className="contact-main">
                <div className="container">
                    <div className="contact-header">
                        <h1>Contact Us</h1>
                        <p>Have a project in mind? Let's build something great together.</p>
                    </div>

                    <div className="contact-content-wrapper">
                        {/* Left Side: Contact Info */}
                        <div className="contact-info-column">
                            <div className="info-card">
                                <h3>Get in Touch</h3>
                                <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>

                                <div className="contact-details">
                                    <div className="detail-item">
                                        <div className="icon-circle"><Mail size={20} /></div>
                                        <div>
                                            <h4>Email</h4>
                                            <a href="mailto:hello@pixelpilot.com">hello@pixelpilot.com</a>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-circle"><Phone size={20} /></div>
                                        <div>
                                            <h4>Phone</h4>
                                            <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-circle"><MapPin size={20} /></div>
                                        <div>
                                            <h4>Office</h4>
                                            <p>123 Innovation Dr, Tech City</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="contact-form-column">
                            <div className="form-card">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Company (Optional)</label>
                                        <input type="text" id="company" placeholder="Your Company Ltd" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
