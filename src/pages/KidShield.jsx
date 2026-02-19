import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import kidshield1 from '../assets/kidshield-1.jpeg';
import kidshield2 from '../assets/kidshield-2.jpeg';
import kidshield3 from '../assets/kidshield-3.jpeg';
import kidshield4 from '../assets/kidshield-4.jpeg';
import kidshield5 from '../assets/kidshield-5.jpeg';
import kidshield6 from '../assets/kidshield-6.jpeg';
import kidshield7 from '../assets/kidshield-7.jpeg';
import '../styles/KidShield.css';

const KidShield = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const screenshots = [
        kidshield1, kidshield2, kidshield3, kidshield4,
        kidshield5, kidshield6, kidshield7
    ];

    return (
        <div className="kidshield-page">
            <Navbar />

            <div className="kidshield-container">
                {/* Back Link */}
                <Link to="/#work" className="back-link">
                    <ArrowLeft size={20} />
                    Back to Projects
                </Link>

                {/* Header Section */}
                <div className="kidshield-header">
                    <span className="kidshield-tag">
                        Android Application
                    </span>
                    <h1 className="kidshield-title">
                        KidShield
                    </h1>
                    <p className="kidshield-description">
                        A comprehensive Parental Control Time Lock App that empowers parents to set healthy digital boundaries.
                        Features OTP-based time extension requests and usage monitoring.
                    </p>

                    <a
                        href="https://github.com/ronaksingh7/KidShield"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                    >
                        <Github size={22} />
                        View GitHub Repo
                    </a>
                </div>

                {/* Gallery Section */}
                <div className="gallery-section">
                    <div className="gallery-header">
                        <div className="header-line"></div>
                        <h2 className="gallery-title">
                            App Gallery
                        </h2>
                        <div className="header-line"></div>
                    </div>

                    <div className="screenshot-grid">
                        {screenshots.map((shot, index) => (
                            <div
                                key={index}
                                className="screenshot-card"
                            >
                                <img
                                    src={shot}
                                    alt={`KidShield Screen ${index + 1}`}
                                    className="screenshot-img"
                                />
                                {/* Shine effect overlay */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                                    pointerEvents: 'none'
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default KidShield;
