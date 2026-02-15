import { Code2, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Code2 className="logo-icon" />
                            <span>DevService</span>
                        </div>
                        <p>Premium software development for the modern web. Transforming ideas into digital reality.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#web">Web Development</a></li>
                                <li><a href="#mobile">Mobile Apps</a></li>
                                <li><a href="#cloud">Cloud Solutions</a></li>
                                <li><a href="#uiux">UI/UX Design</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul className="contact-list">
                                <li>
                                    <Mail size={16} />
                                    <span>hello@devservice.com</span>
                                </li>
                                <li>
                                    <Phone size={16} />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li>
                                    <MapPin size={16} />
                                    <span>San Francisco, CA</span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Social</h4>
                            <div className="social-icons">
                                <a href="#" aria-label="Github"><Github size={20} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevService. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
