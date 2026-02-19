import { Code2, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/src/assets/logo.png" alt="PixelPilot Logo" className="logo-image" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                            <Code2 className="logo-icon" style={{ display: 'none' }} />
                            <span>PixelPilot</span>
                        </Link>
                        <p>Premium software development for the modern web. Transforming ideas into digital reality.</p>
                    </div>

                    <div className="footer-links">

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
                                    <span>hello@pixelpilot.com</span>
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
                    <p>&copy; {new Date().getFullYear()} PixelPilot. All rights reserved.</p>
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
