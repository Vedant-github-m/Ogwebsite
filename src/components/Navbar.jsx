import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                {/* Left Links */}
                <div className="nav-group left">
                    <Link to="/#services" className="nav-item">Services</Link>
                    <Link to="/#work" className="nav-item">Work</Link>
                </div>

                {/* Centered Logo */}
                <Link to="/" className="logo">
                    <img src={logo} alt="PixelPilot Logo" className="logo-image" />
                    <span><span style={{ color: 'var(--accent-blue)' }}>Pixel</span>Pilot</span>
                </Link>

                {/* Right Links */}
                <div className="nav-group right">
                    <Link to="/#process" className="nav-item">Process</Link>
                    <Link to="/contact" className={`nav-item ${isActive('/contact')}`}>Contact</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <Link to="/#services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="/#work" onClick={() => setIsOpen(false)}>Work</Link>
                <Link to="/#process" onClick={() => setIsOpen(false)}>Process</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
