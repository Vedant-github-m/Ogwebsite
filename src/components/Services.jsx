import { Code, Smartphone, Globe, Layout, Network, ShieldCheck } from 'lucide-react';
import '../styles/Services.css';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Custom Software',
        description: 'Bespoke solutions tailored to your unique business requirements.'
    },
    {
        icon: <Globe size={32} />,
        title: 'Web Development',
        description: 'High-performance, scalable web apps built with modern frameworks.'
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile apps for iOS and Android.'
    },
    {
        icon: <Layout size={32} />,
        title: 'UI/UX Design',
        description: 'User-centric interfaces and research-driven designs for intuitive interactions.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Expertise</span>
                    <h2>Solutions for Every <span className="text-gradient">Business Need</span></h2>
                    <p>We deliver end-to-end software development services tailored to your goals.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
