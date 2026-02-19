import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to build your <span className="text-gradient">software?</span></h2>
                    <p>Let's turn your vision into reality. trusted by startups and enterprises worldwide.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Get Free Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
