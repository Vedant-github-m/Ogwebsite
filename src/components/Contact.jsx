import React, { useRef, useState } from 'react';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get in Touch</span>
                    <h2>Ready to Start Your <span className="text-gradient">Project?</span></h2>
                    <p>Let's discuss how we can help your business grow.</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@pixelpilotlabs.com" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@pixelpilotlabs.com</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/pixelpilot_labs?igsh=cWRlaGVhMjI5dXF1" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Instagram /></div>
                            <div>
                                <h3>Instagram</h3>
                                <p>PixelPilot_Labs</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/pixel-pilot-2a1a783b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Linkedin /></div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>PixelPilot</p>
                            </div>
                        </a>
                    </div>

                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" name="company" placeholder="Your Company Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Tell us about your project..." rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        {submitStatus === 'success' && (
                            <p style={{ color: '#4caf50', marginTop: '10px', textAlign: 'center' }}>Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p style={{ color: '#f44336', marginTop: '10px', textAlign: 'center' }}>Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
