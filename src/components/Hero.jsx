import { ArrowRight, ChevronRight } from 'lucide-react';
import heroImage from '../assets/hero-illustration.png';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">
                        <span>New: AI Integration Services</span>
                        <ChevronRight size={14} />
                    </div>
                    <h1>
                        Building <br />
                        <span className="text-gradient">Scalable Software</span> <br />
                        for the Future
                    </h1>
                    <p className="hero-description">
                        We engineer robust, high-performance digital solutions tailored for startups and enterprises.
                        From cloud architecture to intuitive UIs, we turn complex challenges into seamless experiences.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary icon-btn">
                            Start a Project <ArrowRight size={18} />
                        </a>
                        <a href="#services" className="btn btn-outline">
                            View Services
                        </a>
                    </div>

                    <div className="trust-indicators">
                        <span>Trusted by 50+ Innovators</span>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={heroImage} alt="Abstract Tech Illustration" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
