import { ArrowRight, ExternalLink } from 'lucide-react';
import projectGraphixwala from '../assets/project-graphixwala.png';
import projectHealth from '../assets/project-health.png';
import projectFintech from '../assets/project-fintech.png';
import '../styles/Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Graphixwala',
        category: 'Digital Solutions & Branding',
        image: projectGraphixwala,
        description: 'A dynamic digital agency platform delivering creative branding, web design, and marketing solutions. Features a vibrant, responsive interface showcasing comprehensive service offerings.',
        link: 'https://graphixwala.com/'
    },
    {
        id: 2,
        title: 'VitalSense Health App',
        category: 'Mobile Development',
        image: projectHealth,
        description: 'IoT-enabled mobile application for monitoring vital signs and connecting patients with healthcare providers securely.',
        link: '#'
    },
    {
        id: 3,
        title: 'FinTech Analytics Dashboard',
        category: 'Web Application',
        image: projectFintech,
        description: 'A real-time financial data visualization platform processing millions of transactions daily with sub-second latency.',
        link: '#'
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Work</span>
                    <h2>Featured <span className="text-gradient">Projects</span></h2>
                    <p>Explore some of our recent success stories and digital transformations.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="portfolio-card">
                            <div className="portfolio-image-container">
                                <img src={project.image} alt={project.title} className="portfolio-image" />
                                <div className="portfolio-overlay">
                                    <a href={project.link} className="btn-icon">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="portfolio-link">
                                    View Case Study <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Portfolio;
