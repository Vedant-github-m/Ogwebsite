import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
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
                        <div className="contact-item">
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@pixelpilot.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><Phone /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><MapPin /></div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>123 Innovation Dr, Tech City</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" placeholder="Your Company Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..." rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
