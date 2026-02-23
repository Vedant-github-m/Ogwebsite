import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css';

const ContactPage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const emailLink = isMobile
        ? "mailto:contact@pixelpilotlabs.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=contact@pixelpilotlabs.com";

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm('service_476vprp', 'template_5kpbgs5', form.current, 'i8QsV5_h0KpUuaDKa')
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

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
                                            <a href={emailLink} target="_blank" rel="noopener noreferrer">contact@pixelpilotlabs.com</a>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-circle"><Instagram size={20} /></div>
                                        <div>
                                            <h4>Instagram</h4>
                                            <a href="https://www.instagram.com/pixelpilot_labs?igsh=cWRlaGVhMjI5dXF1" target="_blank" rel="noopener noreferrer">PixelPilot_Labs</a>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="icon-circle"><Linkedin size={20} /></div>
                                        <div>
                                            <h4>LinkedIn</h4>
                                            <a href="https://www.linkedin.com/in/pixel-pilot-2a1a783b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">PixelPilot</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="contact-form-column">
                            <div className="form-card">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Company (Optional)</label>
                                        <input type="text" id="company" name="company" placeholder="Your Company Ltd" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                                    </button>
                                    {submitStatus === 'success' && (
                                        <p style={{ color: '#4caf50', marginTop: '15px', textAlign: 'center', fontWeight: '500' }}>Message sent successfully!</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p style={{ color: '#f44336', marginTop: '15px', textAlign: 'center', fontWeight: '500' }}>Failed to send message: Check console for error.</p>
                                    )}
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
