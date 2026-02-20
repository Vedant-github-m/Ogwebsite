import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import heroImage from '../assets/hero-illustration.png';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">

                    <h1>
                        Building <br />
                        <span className="text-gradient">Scalable Software</span> <br />
                        for the Future
                    </h1>
                    <p className="hero-description">
                        We engineer robust, high-performance digital solutions tailored for startups and enterprises.
                        From intuitive UIs to complex backends, we turn challenges into seamless experiences.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary icon-btn">
                            Start a Project <ArrowRight size={18} />
                        </Link>
                        <a href="#services" className="btn btn-outline">
                            View Services
                        </a>
                    </div>

                    <div className="trust-indicators">
                        <span>Trusted by 10+ Innovators</span>
                    </div>
                </div>

                {/* Image Removed by User Request */}
            </div>
        </section>
    );
};

export default Hero;
