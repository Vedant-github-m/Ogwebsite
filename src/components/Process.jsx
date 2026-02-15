import React from 'react';
import { Search, Map, Code2, Rocket } from 'lucide-react';
import '../styles/Process.css';

const steps = [
    {
        icon: <Search size={32} />,
        number: "01",
        title: "Discovery",
        description: "We dive deep into your vision, understanding your goals and requirements to build a solid foundation."
    },
    {
        icon: <Map size={32} />,
        number: "02",
        title: "Strategy",
        description: "We craft a comprehensive roadmap and technical architecture tailored to your specific needs."
    },
    {
        icon: <Code2 size={32} />,
        number: "03",
        title: "Development",
        description: "Our experts build your solution with precision, using regular updates to keep you in the loop."
    },
    {
        icon: <Rocket size={32} />,
        number: "04",
        title: "Launch",
        description: "We deploy your product to the world, ensuring a smooth takeoff and continued support."
    }
];

const Process = () => {
    return (
        <section className="process-section" id="process">
            <div className="container">
                <div className="process-header">
                    <span className="section-tag">How We Work</span>
                    <h2>Our Process</h2>
                    <p>A streamlined workflow designed to deliver excellence from concept to launch.</p>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card">
                            <div className="card-top">
                                <span className="step-number">{step.number}</span>
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>

                            {/* Mobile-hidden connector visuals could be added via CSS if needed */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
