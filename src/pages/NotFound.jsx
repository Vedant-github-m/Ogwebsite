import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist on PixelPilot Labs."
            />
            <Navbar />
            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 20px' }}>
                <div>
                    <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
                    <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
                    <p style={{ marginBottom: '30px' }}>Sorry, the page you're looking for doesn't exist.</p>
                    <Link to="/" style={{ padding: '10px 20px', background: 'var(--primary)', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
                        Return Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
