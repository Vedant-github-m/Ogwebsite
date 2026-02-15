import { Users, Zap, DollarSign, Layers, Clock } from 'lucide-react';
import '../styles/WhyChooseUs.css';

const benefits = [
    {
        icon: <Users size={32} />,
        title: 'Experienced Developers',
        description: 'Our team consists of senior engineers with years of expertise in building complex systems.'
    },
    {
        icon: <Zap size={32} />,
        title: 'Fast Delivery',
        description: 'Agile methodologies ensure we ship high-quality software rapidly without compromising on quality.'
    },
    {
        icon: <DollarSign size={32} />,
        title: 'Transparent Pricing',
        description: 'No hidden fees or surprises. We provide clear, detailed quotes and stay within budget.'
    },
    {
        icon: <Layers size={32} />,
        title: 'Scalable Architecture',
        description: 'We build systems designed to grow with your business, handling millions of users effortlessly.'
    },
    {
        icon: <Clock size={32} />,
        title: '24/7 Support',
        description: 'Round-the-clock technical support to ensure your critical systems are always operational.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-us-section">
            <div className="container">
                <div className="why-us-content">
                    <div className="why-us-header">
                        <span className="section-tag">Why Choose Us</span>
                        <h2>Partner with the <span className="text-gradient">Best</span></h2>
                        <p>We combine technical excellence with business acumen to deliver superior results.</p>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
