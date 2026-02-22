import { Code2, Mail, Instagram, Linkedin } from 'lucide-react';
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
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@pixelpilotlabs.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
                                        <Mail size={16} />
                                        <span>contact@pixelpilotlabs.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/pixelpilot_labs?igsh=cWRlaGVhMjI5dXF1" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
                                        <Instagram size={16} />
                                        <span>PixelPilot_Labs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/pixel-pilot-2a1a783b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
                                        <Linkedin size={16} />
                                        <span>PixelPilot</span>
                                    </a>
                                </li>
                            </ul>
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
