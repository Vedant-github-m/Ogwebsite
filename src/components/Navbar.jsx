import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
                    <Link to="/#prebuilt" className="nav-item">Prebuilt</Link>
                    <Link to="/#customized" className="nav-item">Customized</Link>
                </div>

                {/* Centered Logo */}
                <Link to="/" className="logo">
                    <Code2 className="logo-icon" />
                    <span>DevService</span>
                </Link>

                {/* Right Links */}
                <div className="nav-group right">
                    <Link to="/#about" className="nav-item">About Us</Link>
                    <Link to="/contact" className={`nav-item ${isActive('/contact')}`}>Contact Us</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <Link to="/#prebuilt" onClick={() => setIsOpen(false)}>Prebuilt</Link>
                <Link to="/#customized" onClick={() => setIsOpen(false)}>Customized</Link>
                <Link to="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
